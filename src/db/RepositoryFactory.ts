// db/RepositoryFactory.ts

import { Connection } from "mongoose";
import { Sequelize } from "sequelize";
import MongoUserRepository from "./repositories/MongoUserRepository";
import SequelizeUserRepository from "./repositories/SequelizeUserRepository";

class RepositoryFactory {
  static createUserRepository(connection: Connection | Sequelize) {
    if (connection instanceof Connection) {
      return new MongoUserRepository(connection);
    } else if (connection instanceof Sequelize) {
      return new SequelizeUserRepository(connection);
    } else {
      throw new Error("Unsupported connection type");
    }
  }
}

export default RepositoryFactory;
