import express from "express";
import BaseRepository from "../db/repositories/BaseRepository";
import { PostDoc } from "../models/Post";

export const postRoutes = (postRepository: BaseRepository<PostDoc>) => {
  const router = express.Router();

  router.get("/", async (req, res) => {
    try {
      const posts = await postRepository.findAll();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Similar routes for POST, PUT, DELETE operations for posts

  return router;
};
