import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import IUserInterface from "../../../shared/interfaces/user";
import { t } from "elysia";

@Entity({ name: "users" })
export class UserSchema implements IUserInterface {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column({ type: "varchar" })
  username!: string;

  @Column({ type: "varchar" })
  email!: string;

  @Column({ type: "varchar" })
  password!: string;
}

export const TUserSchema = t.Object({
  username: t.String(),
  email: t.String({ format: "email" }),
  password: t.String(),
});
