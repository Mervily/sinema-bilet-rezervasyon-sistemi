import { reserveSeats } from "./seatController.js";

let reservations = [];

export const getAllReservations = (req, res) => {
  res.json({
    reservations,
  });
};

export const getReservationById = (req, res) => {
  const { id } = req.params;

  const reservation = reservations.find((item) => item.id === Number(id));

  if (!reservation) {
    return res.status(404).json({ message: "Rezervasyon bulunamadı." });
  }

  res.json(reservation);
};

export const createReservation = (req, res) => {
  const {
    userId,
    movieTitle,
    date,
    time,
    hall,
    seats,
    totalPrice,
    showtimeId,
  } = req.body;

  const newReservation = {
    id: Date.now(),
    userId,
    movieTitle,
    date,
    time,
    hall,
    seats,
    totalPrice,
    status: "Onaylandı",
  };

  reservations.push(newReservation);

  if (showtimeId && seats?.length > 0) {
    reserveSeats(showtimeId, seats);
  }

  res.status(201).json({
    message: "Rezervasyon oluşturuldu.",
    reservation: newReservation,
  });
};