export class GeneralValueObject<T> {
  constructor(private value: unknown){}
  equals(ob: T){
    if(typeof ob === typeof this && JSON.stringify(ob) === JSON.stringify(this)){
      return true;
    }else{
      return false;
    }
  }
}

export class NameValueObject extends GeneralValueObject<NameValueObject> {
  constructor(name) {
    if (name !== undefined || name !== null) {
      super(name)

    } else {
      throw new Error('User name must not be empty');
    }
  }
}

export class MailValueObject extends GeneralValueObject<MailValueObject> {
  constructor(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      super(mail)
    } else {
      throw new Error('User email must be valid format');
    }
  }
}

export class PasswordValueObject extends GeneralValueObject<PasswordValueObject> {
  constructor(pssw) {
    if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(pssw)) {
      super(pssw)
    } else {
      throw new Error('Password have to contain one letter and one number');
    }
  }
}