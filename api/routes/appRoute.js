import express from "express";
const router = express.Router();

import {
  getAllPaints,
  postPaint,
  deletePaint,
  updatePaint,
} from "../controllers/appController.js";

router.route("/paints").get(getAllPaints);
router.route("/paints").post(postPaint);
router.route("/paints/:id").delete(deletePaint);
router.route("/paints/:id").put(updatePaint);

export default router;
