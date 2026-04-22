const createRowSeats = (row, count, reservedSeats = []) => {
  return Array.from({ length: count }, (_, index) => {
    const seatNumber = index + 1;
    const seatId = `${row}${seatNumber}`;

    return {
      id: seatId,
      row,
      number: seatNumber,
      isReserved: reservedSeats.includes(seatId),
    };
  });
};

let seatsByShowtime = {
  1: [
    ...createRowSeats("A", 14, ["A2", "A11"]),
    ...createRowSeats("B", 14, ["B3", "B7", "B12"]),
    ...createRowSeats("C", 14, ["C5", "C6"]),
    ...createRowSeats("D", 14, ["D8", "D9", "D10"]),
    ...createRowSeats("E", 14, ["E1", "E2", "E13"]),
    ...createRowSeats("F", 14, ["F4", "F5", "F6"]),
    ...createRowSeats("G", 14, ["G10", "G11"]),
    ...createRowSeats("H", 14, ["H7"]),
  ],
  2: [
    ...createRowSeats("A", 14, ["A1", "A2"]),
    ...createRowSeats("B", 14, ["B6", "B7"]),
    ...createRowSeats("C", 14, ["C4", "C10"]),
    ...createRowSeats("D", 14, ["D3", "D12"]),
    ...createRowSeats("E", 14, ["E8", "E9"]),
    ...createRowSeats("F", 14, ["F5"]),
    ...createRowSeats("G", 14, ["G1", "G14"]),
    ...createRowSeats("H", 14, ["H6", "H7", "H8"]),
  ],
  3: [
    ...createRowSeats("A", 12, ["A3"]),
    ...createRowSeats("B", 12, ["B4", "B5"]),
    ...createRowSeats("C", 12, ["C7"]),
    ...createRowSeats("D", 12, ["D1", "D2"]),
    ...createRowSeats("E", 12, ["E10"]),
    ...createRowSeats("F", 12, ["F8", "F9"]),
    ...createRowSeats("G", 12, ["G6"]),
    ...createRowSeats("H", 12, ["H11"]),
  ],
  4: [
    ...createRowSeats("A", 10, ["A5"]),
    ...createRowSeats("B", 10, ["B2", "B8"]),
    ...createRowSeats("C", 10, ["C1"]),
    ...createRowSeats("D", 10, ["D6"]),
    ...createRowSeats("E", 10, ["E4", "E5"]),
    ...createRowSeats("F", 10, ["F9"]),
    ...createRowSeats("G", 10, []),
    ...createRowSeats("H", 10, ["H3"]),
  ],
  5: [
    ...createRowSeats("A", 16, ["A4", "A5"]),
    ...createRowSeats("B", 16, ["B8"]),
    ...createRowSeats("C", 16, ["C10", "C11"]),
    ...createRowSeats("D", 16, ["D2"]),
    ...createRowSeats("E", 16, ["E14"]),
    ...createRowSeats("F", 16, ["F7", "F8"]),
    ...createRowSeats("G", 16, []),
    ...createRowSeats("H", 16, ["H1", "H16"]),
  ],
  6: [
    ...createRowSeats("A", 18, ["A9"]),
    ...createRowSeats("B", 18, ["B4", "B5"]),
    ...createRowSeats("C", 18, ["C12"]),
    ...createRowSeats("D", 18, ["D7", "D8"]),
    ...createRowSeats("E", 18, ["E15"]),
    ...createRowSeats("F", 18, ["F2", "F3"]),
    ...createRowSeats("G", 18, ["G11"]),
    ...createRowSeats("H", 18, ["H6", "H7"]),
  ],
};

export const getSeatsByShowtime = (req, res) => {
  const { showtimeId } = req.params;
  const seats = seatsByShowtime[showtimeId] || [];
  res.json({ seats });
};

export const reserveSeats = (showtimeId, selectedSeats) => {
  const seats = seatsByShowtime[showtimeId];
  if (!seats) return;

  seatsByShowtime[showtimeId] = seats.map((seat) =>
    selectedSeats.includes(seat.id)
      ? { ...seat, isReserved: true }
      : seat
  );
};