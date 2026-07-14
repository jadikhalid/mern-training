import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello! This is albums area !");
});

export default router;
