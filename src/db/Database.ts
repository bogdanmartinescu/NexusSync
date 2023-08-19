// db/Database.ts

import mongoose, { Connection } from "mongoose";
import { Sequelize } from "sequelize";

const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost/myapp";

class Database {
  private static instance: Database;
  private connection: mongoose.Connection | Sequelize;

  private constructor() {
    // Connect to the chosen database based on environment or configuration
    // Initialize this.connection with the appropriate connection instance
    this.connection = new Connection();
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  public getConnection(): mongoose.Connection | Sequelize {
    return this.connection;
  }
}

export default Database.getInstance();
