import IUsersRepository from "../infrastructure/users.repository.interface";
;
export class ListUsers {

  private repo: IUsersRepository;

  constructor(repo: IUsersRepository){
    this.repo = repo
  }

  listUsers() {
    return this.repo.getListUsers();
  }
}