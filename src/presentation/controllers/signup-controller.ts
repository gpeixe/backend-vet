import { HttpRequest, HttpResponse, Controller, badRequest, MissingParamError, InvalidParamError, EmailValidator } from './signup-controller-protocols'

export class SignUpController implements Controller {
  constructor (private readonly emailValidator: EmailValidator) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const requiredParameters = ['name', 'email', 'password', 'passwordConfirmation']
    for (const parameter of requiredParameters) {
      if (!httpRequest.body[parameter]) {
        return badRequest(new MissingParamError(parameter))
      }
    }
    const { password, passwordConfirmation, email } = httpRequest.body
    if (password !== passwordConfirmation) {
      return badRequest(new InvalidParamError('passwordConfirmation'))
    }
    const isValid = this.emailValidator.isValid(email)
    if (!isValid) {
      return badRequest(new InvalidParamError('email'))
    }
  }
}
