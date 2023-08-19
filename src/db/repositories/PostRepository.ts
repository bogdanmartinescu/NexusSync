import BaseRepository from "./BaseRepository";
import { PostDoc } from "/models/Post";
import { Model, Connection } from "mongoose"; // Import the Model and Connection types

class PostRepository implements BaseRepository<PostDoc> {
  private model: Model<PostDoc>;

  constructor(connection: Connection) {
    this.model = connection.model<PostDoc>("Post");
  }
  findAll(): Promise<PostDoc[]> {
    throw new Error("Method not implemented.");
  }
  findById(id: string): Promise<any> {
    throw new Error("Method not implemented.");
  }
  create(data: PostDoc): Promise<PostDoc> {
    throw new Error("Method not implemented.");
  }
  update(id: string, data: PostDoc): Promise<any> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  // Implement methods using the 'model' instance
  // ...
}

export default PostRepository;
