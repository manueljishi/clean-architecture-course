import { UserEntity } from "../domain/entities/user-entity";
import UserView from "../view/user.view";
import { CreateUser } from "../use-cases/create-user.use-case";
import { ListUsers } from "../use-cases/list-users.use-case";
import UsersRepository from "../infrastructure/users.repository";

export class UserPresenter{
	private readonly view = new UserView();
	private readonly repo = new UsersRepository()
	private readonly createUserUseCase = new CreateUser(this.repo) ;
	private readonly listUsersUseCase = new ListUsers(this.repo);

	public run(){
		let counter =0;
		while(counter < 5){
			this.runApp();
			counter++;
		}
	}
	private runApp(){
		const users = this.listUsersUseCase.listUsers();
			this.view.showCurrentState(users);
			const name = this.view.getName()
			const mail = this.view.getMail()
			const pass = this.view.getPass()
			try{
				const newUserFromInput = new UserEntity(name, mail, pass);
				this.createUserUseCase.createUser(newUserFromInput);
			}catch(e){
				this.view.showError(e)
			}
	}
}