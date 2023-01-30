import express from "express";
import {
  feedTrackItems,
  getAllTrackItems,
  createTrackItem,
} from "../controllers/trackItem.js";

const router = express.Router();

router.get("/seed", feedTrackItems);
router.get("/", getAllTrackItems);
router.post("/", createTrackItem);
export default router;
