import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Auth route çalışıyor.",
  });
});

router.post("/register", (req, res) => {
  res.json({
    message: "Kayıt endpoint hazır.",
  });
});

router.post("/login", (req, res) => {
  res.json({
    message: "Giriş endpoint hazır.",
  });
});

export default router;