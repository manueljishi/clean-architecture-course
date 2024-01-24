import { UserEntity } from "../domain/entities/user-entity";
import IUsersRepository from "../infrastructure/users.repository.interface";
export class CreateUser {
  private repo: IUsersRepository;

  constructor(repo: IUsersRepository){
    this.repo = repo
  }

  createUser(user: UserEntity): void {
    const userFound = this.repo.findUserByEmail(user.getMail());
    if(userFound){
      throw new Error(`User with ${user.getMail()} already exists`);
    }else{
      this.repo.createNewUser(user);
    }
  }
}