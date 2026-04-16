import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Showtimes route çalışıyor.",
    showtimes: [
      {
        id: 1,
        movieId: 1,
        hall: "Salon 1",
        date: "15 Nisan 2026",
        time: "13:00",
      },
      {
        id: 2,
        movieId: 2,
        hall: "Salon 2",
        date: "15 Nisan 2026",
        time: "16:30",
      },
    ],
  });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  res.json({
    message: `Showtime detail endpoint çalışıyor. Seans id: ${id}`,
  });
});

export default router;