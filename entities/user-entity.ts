import {NameValueObject, MailValueObject, PasswordValueObject} from "./value-object"

export class UserEntity {
  private id: string;
  private name: NameValueObject;
  private mail: MailValueObject;
  private passw: PasswordValueObject;
  constructor(name: string, mail: string, passw: string, id: string) {
    try {
      this.id = id || crypto.randomUUID();
      this.name = new NameValueObject(name);
      this.mail = new MailValueObject(mail);
      this.passw = new PasswordValueObject(passw);
    } catch(e) {
      console.log(e);
    }
  }
  equals(user){
    if(user.id !== undefined && user.id === this.id){
      return true;
    }else{
      return false;
    }
  }
}

