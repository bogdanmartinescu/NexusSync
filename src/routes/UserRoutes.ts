import express from "express";
import BaseRepository from "../db/repositories/BaseRepository";
import { UserDoc } from "models/User";

export const userRoutes = (userRepository: BaseRepository<UserDoc>) => {
  const router = express.Router();

  router.get("/", async (req, res) => {
    try {
      const users = await userRepository.findAll();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Similar routes for POST, PUT, DELETE operations for users

  return router;
};
