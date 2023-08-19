import mongoose from "mongoose";
import { PostDoc } from "./Post";

export interface UserDoc extends mongoose.Document {
  id: string;
  createdAt: Date;
  email: string;
  name?: string;
  role: "USER" | "ADMIN";
  posts: mongoose.Types.ObjectId[] | PostDoc[];
}

const userSchema = new mongoose.Schema<UserDoc>({
  id: mongoose.Schema.Types.ObjectId,
  createdAt: { type: Date, default: Date.now },
  email: { type: String, unique: true, required: true },
  name: String,
  role: { type: String, default: "USER" },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
});

export const UserModel = mongoose.model<UserDoc>("User", userSchema);
