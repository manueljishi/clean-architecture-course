import {NameValueObject, MailValueObject, PasswordValueObject} from "./value-object"
import * as crypto from 'crypto'

export class UserEntity {
  private id: string;
  private name: NameValueObject;
  private mail: MailValueObject;
  private passw: PasswordValueObject;
  constructor(name: string, mail: string, passw: string, id?: string) {
      this.id = id || crypto.randomUUID();
      this.name = new NameValueObject(name);
      this.mail = new MailValueObject(mail);
      this.passw = new PasswordValueObject(passw);
  }
  equals(user){
    if(user.id !== undefined && user.id === this.id){
      return true;
    }else{
      return false;
    }
  }

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name.getValue();
  }

  getMail(): string {
    return this.mail.getValue();
  }

  getPassword(): string {
    return this.passw.getValue();
  }
}

