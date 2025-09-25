import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import IUserInterface from "../../../shared/interfaces/user";

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
