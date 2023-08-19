import express from "express";
import { Connection } from "mongoose";
import { Sequelize } from "sequelize";
import Database from "./db/Database";
import RepositoryFactory from "./db/RepositoryFactory";
import { userRoutes } from "./routes/UserRoutes";

const app = express();

const dbConnection: Connection | Sequelize = Database.getConnection(); // Adjust based on the active connection

const userRepository = RepositoryFactory.createUserRepository(dbConnection);

app.use(express.json());

app.use("/users", userRoutes(userRepository));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
