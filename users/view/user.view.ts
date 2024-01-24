import * as rd from 'readline-sync';
import { UserEntity } from 'users/domain/entities/user-entity';
import { IUserView } from './user.view.interface';
export default class UserView implements IUserView{
	mensaje = '%cBienvenido, crea un nuevo usuario: ';
	estilos = 'color: green; font-weight: bold;';
	constructor(){}
	
	public showCurrentState(users: UserEntity[]){
		console.log(`Length of users: ${users.length}`)
	}

	getName(): string{
		return rd.question("Nombre:")
	}
	getMail(): string{
		return rd.question("Mail:")
	}
	getPass(): string{
		return rd.question("Password:")
	}
	showError(e: Error): void {
		console.error(e.message);
	}
}