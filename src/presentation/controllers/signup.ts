import { EmailValidator } from '../../validation/protocols/email-validator'
import { InvalidParamError } from '../errors/invalid-param-error'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helper'
import { Controller } from '../protocols/controller'
import { HttpRequest, HttpResponse } from '../protocols/http'

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
    this.emailValidator.isValid(email)
  }
}
