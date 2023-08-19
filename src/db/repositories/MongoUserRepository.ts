// db/repositories/MongoUserRepository.ts

import BaseRepository from "./BaseRepository";
import { UserDoc } from "/models/User";
import mongoose, { Model } from "mongoose";

class MongoUserRepository implements BaseRepository<UserDoc> {
  private model: Model<UserDoc>;

  constructor(connection: mongoose.Connection) {
    this.model = connection.model<UserDoc>("User");
  }
  findAll(): Promise<UserDoc[]> {
    throw new Error("Method not implemented.");
  }
  findById(id: string): Promise<any> {
    throw new Error("Method not implemented.");
  }
  create(data: UserDoc): Promise<UserDoc> {
    throw new Error("Method not implemented.");
  }
  update(id: string, data: UserDoc): Promise<any> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  // Implement methods using the 'model' instance
  // ...
}

export default MongoUserRepository;
