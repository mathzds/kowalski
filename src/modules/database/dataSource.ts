import { DataSource } from "typeorm";
import { UserSchema } from "./schemas/user";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./database.sqlite",
  synchronize: true,
  logging: true,
  entities: [UserSchema],
});
