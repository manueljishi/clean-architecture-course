export class GeneralValueObject<T> {
  equals(ob: T){
    if(typeof ob === typeof this && JSON.stringify(ob) === JSON.stringify(this)){
      return true;
    }else{
      return false;
    }
  }
}

export class NameValueObject extends GeneralValueObject<NameValueObject> {
  private name;
  constructor(name) {
    super()
    if (name !== undefined || name !== null) {
      this.name = name;

    } else {
      throw new Error('User name must not be empty');
    }
  }
}

export class MailValueObject extends GeneralValueObject<MailValueObject> {
  private mail;
  constructor(mail) {
    super()
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      this.mail = mail;
    } else {
      throw new Error('User email must be valid format');
    }
  }
}

export class PasswordValueObject extends GeneralValueObject<PasswordValueObject> {
  private pssw;
  constructor(pssw) {
    super()
    if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(pssw)) {
      this.pssw = pssw;
    } else {
      throw new Error('Password have to contain one letter and one number');
    }
  }
}