import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello! This is admin area !");
});

export default router;
