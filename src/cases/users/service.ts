import BaseRepository from "../../shared/utils/baseRepository";
import IUserInterface, { IUserRepository } from "../../shared/interfaces/user";
import { UserSchema } from "../../modules/database/schemas/user";

export default class UserService extends BaseRepository<UserSchema> implements IUserRepository {
  constructor() {
    super(UserSchema);
  }

  async create(data: Partial<IUserInterface>): Promise<IUserInterface> {
    return await this.repository.save(data);
  }

  async read(identifier: string): Promise<IUserInterface> {
    const user = await this.repository.findOneBy({ id: identifier });

    if (!user) {
      throw new Error("User not find");
    }

    return user;
  }

  async update(identifier: string, data: Partial<IUserInterface>): Promise<IUserInterface> {
    await this.repository.update(identifier, data);
    return this.read(identifier);
  }

  async delete(identifier: string): Promise<string> {
    const result = await this.repository.delete(identifier);

    if (!result.affected) {
      throw new Error("User not found");
    }

    return "User deleted";
  }
}
