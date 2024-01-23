import { UserEntity } from "users/domain/entities/user-entity";
import { MailValueObject, NameValueObject, PasswordValueObject } from "users/domain/entities/value-object";
import { CreateUser } from "users/use-cases/create-user.use-case";

export class CreateUserController {

  private useCase = new CreateUser;
  
  createUser(): void {
    const user: UserEntity = {
      id: "",
      name: new NameValueObject("AAA"),
      mail: new MailValueObject("aaa@gmail.com"),
      passw: new PasswordValueObject("ajasdj23810a"),
    }

    this.useCase.createUser(user);
  }

}