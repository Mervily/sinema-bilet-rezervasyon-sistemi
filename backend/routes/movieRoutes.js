import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Movies route çalışıyor.",
    movies: [
      { id: 1, title: "Dune: Part Two" },
      { id: 2, title: "Oppenheimer" },
    ],
  });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  res.json({
    message: `Movie detail endpoint çalışıyor. Film id: ${id}`,
  });
});

export default router;