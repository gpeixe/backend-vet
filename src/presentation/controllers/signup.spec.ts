import { badRequest } from '../helpers/http'
import { SignUpController } from './signup'

describe('SignUp Controller', () => {
  test('Should return 400 if no name is provided', async () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        email: 'any_email@email.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(badRequest(new Error()))
  })
})
