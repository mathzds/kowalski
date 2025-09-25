export namespace Enviroments {
  export type Config = {
    APP_PORT: number;
  };

  export const APP_PORT: number = Bun.env.APP_PORT ? Number(Bun.env.APP_PORT) : 3000;

  export const config: Config = {
    APP_PORT,
  };
}
