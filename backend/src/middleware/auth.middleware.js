import { clerkClient } from "@clerk/express";

export const protecRoute = async (req, res, next) => {
  if (!req.auth.userId) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized - You must be logged in",
    });
  }
  next();
};

export const requireAdmin = async (req, res, next) => {
  try {
    const currentUser = await clerckClient.users.getUser(req.auth.userId);
    const isAdmin =
      process.env.ADMIN_EMAIL === currentUser.primaryEmailAddress?.emailAddress;

    if (!isAdmin) {
      return res
        .status(403)
        .json({ message: "Unauthorized - you must be an admin" });
    }

    next();
  } catch (error) {
    return res.status(500).json({
      message: "Error in middleware",
      error: error.message,
    });
  }
};
