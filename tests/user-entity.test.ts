import { UserEntity } from "../entities/user-entity"
import { NameValueObject, MailValueObject, PasswordValueObject } from "../entities/value-object"
describe('User entity tests', ()=> {
	test('users should be equal with same id', ()=> {
		const user1 = new UserEntity('Pepe', 'test@test.com', 'Hola1234', '123-123')
		const user2 = new UserEntity('Pepe', 'test@test.com', 'Hola1234', '123-123')
		expect(user1.equals(user2)).toBeTruthy();
	})
	test('users should be different with different id', ()=> {
		const user1 = new UserEntity('Pepe', 'test@test.com', 'Hola1234', '123-123')
		const user2 = new UserEntity('Pepe', 'test@test.com', 'Hola1234', '123-1234')
		expect(user1.equals(user2)).toBeFalsy();
	})
})