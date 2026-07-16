import { Router } from "express";
import { protecRoute, requireAdmin } from "../middleware/auth.middleware.js";

const router = Router();

router.get("/", protecRoute, requireAdmin, (req, res) => {
  res.send("Hello! This is admin area !");
});

export default router;
