import Elysia from "elysia";

export default async function SetupRoutes(Client: Elysia) {
  Client.get("/", () => {
    return { message: "Hello, world!" };
  });
}
