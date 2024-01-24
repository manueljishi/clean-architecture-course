import { UserModel } from "../domain/models/user.model";
import IUsersRepository from "./users.repository.interface";
import { UserEntity } from "../domain/entities/user-entity";

export default  class UsersRepository implements IUsersRepository {
  public userList: UserModel[] = [];


  findUserByEmail(email: string): UserEntity {
    const duplicateMail = this.userList.find((user) => user.email === email);
    if(duplicateMail){
      return new UserEntity(duplicateMail.name, duplicateMail.email, duplicateMail.password, duplicateMail.id)
    }
    
  }

  createNewUser(userEntity: UserEntity): void {
    const user: UserModel = {
      id: userEntity.getId(),
      name: userEntity.getName(),
      email: userEntity.getMail(),
      password: userEntity.getPassword(),
    }
    this.userList.push(user);
    

    console.log(this)
  }

  getListUsers(): UserEntity[] {
    const newUserList = this.userList.map((user) => {
      return new UserEntity(user.name, user.email, user.password, user.id);
    })

    console.log(this)
    return newUserList;
  }

}