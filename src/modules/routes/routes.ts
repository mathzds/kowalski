import Elysia from "elysia";
import UserController from "../../cases/users/controller";

export default async function SetupRoutes(app: Elysia) {
  UserController(app);
}
