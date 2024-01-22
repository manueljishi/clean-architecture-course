import { NameValueObject, MailValueObject, PasswordValueObject } from "../entities/value-object"

describe('Value object', () => {
  test('Name value object is equal', () => {
    const name1ValueObject = new NameValueObject('A');
    const name2ValueObject = new NameValueObject('A');

    expect(name1ValueObject.equals(name2ValueObject)).toBeTruthy();
  });

  test('Name value object is different', () => {
    const name1ValueObject = new NameValueObject('A');
    const name2ValueObject = new NameValueObject('B');

    expect(name1ValueObject.equals(name2ValueObject)).toBeFalsy();
  });

  test('Email value object is equal', () => {
    const email1 = new MailValueObject('test@test.com');
    const email2 = new MailValueObject('test@test.com');

    expect(email1.equals(email2)).toBeTruthy();
  });

  test('Email value object is different', () => {
    const email1 = new MailValueObject('test@test.com');
    const email2 = new MailValueObject('test@testtttt.com');

    expect(email1.equals(email2)).toBeFalsy();
  });

  test("it should correct mail", () => {
    expect(()=> new MailValueObject('testtest.com')).toThrow("User email must be valid format");
  })

  test("it should correct password", () => {
    expect(()=> new PasswordValueObject('aaaaa')).toThrow("Password have to contain one letter and one number");
  })
});
