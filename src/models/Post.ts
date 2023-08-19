import mongoose from "mongoose";
import { UserDoc } from "./User";

export interface PostDoc extends mongoose.Document {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  published: boolean;
  title: string;
  author: mongoose.Types.ObjectId | UserDoc;
}

const postSchema = new mongoose.Schema<PostDoc>({
  id: mongoose.Schema.Types.ObjectId,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  published: { type: Boolean, default: false },
  title: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

export const PostModel = mongoose.model<PostDoc>("Post", postSchema);
