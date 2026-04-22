import express from "express";
import { getSeatsByShowtime } from "../controllers/seatController.js";

const router = express.Router();

router.get("/:showtimeId", getSeatsByShowtime);

export default router;