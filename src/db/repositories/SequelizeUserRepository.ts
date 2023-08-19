// db/repositories/SequelizeUserRepository.ts

import { Sequelize } from "sequelize";
import BaseRepository from "./BaseRepository";
import { UserAttributes, UserModel } from "/models/User"; // Adjust the import based on Sequelize model setup

class SequelizeUserRepository implements BaseRepository<UserAttributes> {
  // Define the Sequelize model instance

  constructor(connection: Sequelize) {
    // Initialize the Sequelize model instance
  }
  findAll(): Promise<UserAttributes[]> {
    throw new Error("Method not implemented.");
  }
  findById(id: string): Promise<any> {
    throw new Error("Method not implemented.");
  }
  create(data: UserAttributes): Promise<UserAttributes> {
    throw new Error("Method not implemented.");
  }
  update(id: string, data: UserAttributes): Promise<any> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  // Implement methods using the Sequelize model instance
  // ...
}

export default SequelizeUserRepository;
