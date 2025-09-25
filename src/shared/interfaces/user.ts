export default interface IUserInterface {
  id: string;
  username: string;
  email: string;
  password: string;
}

export interface IUserRepository {
  create(data: Partial<IUserInterface>): Promise<IUserInterface>;
  read(identifier: string): Promise<IUserInterface>;
  update(identifier: string, data: Partial<IUserInterface>): Promise<IUserInterface>;
  delete(identifier: string): Promise<string>;
}
