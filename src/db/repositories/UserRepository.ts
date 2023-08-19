import BaseRepository from "./BaseRepository";
// import { UserDoc } from "../models/User";
import { UserDoc } from "models/User";
import { Model, Connection } from "mongoose"; // Import the Model and Connection types

class UserRepository implements BaseRepository<UserDoc> {
  private model: Model<UserDoc>;

  constructor(connection: Connection) {
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

export default UserRepository;
