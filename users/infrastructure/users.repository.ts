import { UserModel } from "users/domain/models/user.model";
import IUsersRepository from "./users.repository.interface";
import { UserEntity } from "users/domain/entities/user-entity";

export default  class UsersRepository implements IUsersRepository {
  public userList: UserModel[];

  createNewUser(userEntity: UserEntity): UserEntity {
    const user: UserModel = {
      id: userEntity.getId(),
      name: userEntity.getName(),
      email: userEntity.getMail(),
      password: userEntity.getPassword(),
    }
    const duplicateMail = this.userList.find((user) => user.email === userEntity.getMail());

    if(!duplicateMail) {
      this.userList.push(user);
      return userEntity;
    } else {
      throw new Error("User mail is alredy register.");
    }
  }

  getListUsers(): UserEntity[] {
    const newUserList = this.userList.map((user) => {
      return new UserEntity(user.id, user.name, user.email, user.password);
    })

    return newUserList;
  }

}