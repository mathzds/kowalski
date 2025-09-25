import { Elysia } from "elysia";
import { Enviroments } from "../../shared/config/enviroments";
import Logger from "../../shared/utils/logger/logger";
import SetupRoutes from "../routes/routes";
import openapi, { fromTypes } from "@elysiajs/openapi";
import { AppDataSource } from "../database/dataSource";

export default class Application {
  protected instance: Elysia;

  constructor() {
    this.instance = new Elysia();
  }

  private decore() {
    this.instance.decorate("logger", new Logger());
    this.instance.use(
      openapi({
        references: fromTypes(),
      })
    );
    return this;
  }

  getInstance() {
    return this.instance;
  }

  async start() {
    this.decore();
    await AppDataSource.initialize();

    await SetupRoutes(this.instance);

    const port = Enviroments.APP_PORT;
    const server = this.instance.listen(Enviroments.APP_PORT);

    console.log(`Running on ${port}`);

    return server;
  }
}
