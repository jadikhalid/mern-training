import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello! This is stats area 00000 !");
});

export default router;
