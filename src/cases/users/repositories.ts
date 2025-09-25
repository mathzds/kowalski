import BaseRepository from '../../shared/utils/baseRepository';
import IUserInterface, { IUserRepository } from '../../shared/interfaces/user';
import { UserSchema } from '../../modules/database/schemas/user';

export default class UserRepository extends BaseRepository<UserSchema> implements IUserRepository {
  constructor() {
    super(UserSchema);
  }

  async create(data: Partial<IUserInterface>): Promise<IUserInterface> {
    return await this.repository.save(data);
  }

  async read(identifier: string): Promise<IUserInterface> {
    const user = await this.repository.findOneBy({ id: identifier });

    if (!user) {
      throw new Error('User not find');
    }

    return user;
  }

  async update(identifier: string, data: Partial<IUserInterface>): Promise<IUserInterface> {
    const user = await this.read(identifier);
    const updatedUser = await this.repository.update(user.id, data);
    return await this.read(user.id);
  }

  async delete(identifier: string): Promise<string> {
    const user = await this.read(identifier);
    const deleted = await this.repository.delete(user.id);

    if (!deleted.affected) {
      throw new Error('User not find');
    }

    return 'User deleted';
  }
}
