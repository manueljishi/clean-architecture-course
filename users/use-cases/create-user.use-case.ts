import { UserEntity } from "users/domain/entities/user-entity";
import UsersRepository from "users/infrastructure/users.repository";
export class CreateUser {
  private repo = new UsersRepository;

  createUser(user: UserEntity): void {
    this.repo.createNewUser(user);
  }
}