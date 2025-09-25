import { EntityTarget, ObjectLiteral, Repository } from "typeorm";
import { AppDataSource } from "../../modules/database/dataSource";

export default abstract class BaseRepository<T extends ObjectLiteral> {
  protected repository: Repository<T>;

  constructor(protected readonly entityTarget: EntityTarget<T>) {
    this.repository = AppDataSource.getRepository(entityTarget);
  }
}
