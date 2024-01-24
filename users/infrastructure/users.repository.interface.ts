import { UserEntity } from "../domain/entities/user-entity";
export default interface IUsersRepository {
  createNewUser(userEntity: UserEntity): void;
  getListUsers(): UserEntity[];
  findUserByEmail(email: string): UserEntity | undefined;
} 