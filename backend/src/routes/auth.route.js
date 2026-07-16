import { Router } from "express";
import User from "../models/user.model.js";
import { authCallback } from "../controller/auth.controller.js";

const router = Router();

router.post("/callback", authCallback);
router.get("/", async (req, res) => {
  console.log("Get method : Hello! This is auth area !");
  res.send("Hello! This is auth area !");
});

export default router;
