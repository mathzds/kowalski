import { Elysia, t } from "elysia";
import UserService from "./service";
import { TUserSchema } from "../../modules/database/schemas/user";

const userService = new UserService();

export default async function UserController(app: Elysia) {
  app.post(
    "/user",
    async ({ body }) => {
      const user = await userService.create(body);
      return user;
    },
    {
      body: TUserSchema,
    }
  );

  app.get(
    "/user/:id",
    async ({ params }) => {
      const user = await userService.read(params.id);
      return user;
    },
    {
      params: t.Object({
        id: t.String({ format: "uuid" }),
      }),
    }
  );

  app.put(
    "/user/:id",
    async ({ params, body }) => {
      const updatedUser = await userService.update(params.id, body);
      return updatedUser;
    },
    {
      params: t.Object({
        id: t.String({ format: "uuid" }),
      }),
      body: t.Partial(TUserSchema),
    }
  );

  app.delete(
    "/user/:id",
    async ({ params }) => {
      const result = await userService.delete(params.id);
      return { message: result };
    },
    {
      params: t.Object({
        id: t.String({ format: "uuid" }),
      }),
    }
  );
}
