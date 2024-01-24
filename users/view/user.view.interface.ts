import { UserEntity } from "users/domain/entities/user-entity";

export interface IUserView{
	showCurrentState(users: UserEntity[]): void
	getName(): string;
	getMail(): string;
	getPass(): string;
	showError(e: Error): void
}