import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello! This is songs area !");
});

export default router;
