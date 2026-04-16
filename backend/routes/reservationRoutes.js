import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Reservations route çalışıyor.",
    reservations: [
      {
        id: 1,
        userId: 1,
        movieTitle: "Interstellar",
        seats: ["A1", "A2"],
      },
    ],
  });
});

router.post("/", (req, res) => {
  res.json({
    message: "Rezervasyon oluşturma endpoint hazır.",
  });
});

export default router;