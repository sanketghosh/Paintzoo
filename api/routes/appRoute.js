import express from "express";
const router = express.Router();

import { getAllPaints, postPaint } from "../controllers/appController.js";

router.route("/paints").get(getAllPaints);
router.route("/paints").post(postPaint);

export default router;
