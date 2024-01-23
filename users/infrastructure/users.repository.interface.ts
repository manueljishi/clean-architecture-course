import { UserEntity } from "users/domain/entities/user-entity";
export default interface IUsersRepository {
  createNewUser(userEntity: UserEntity): UserEntity;
  getListUsers(): UserEntity[];
} 