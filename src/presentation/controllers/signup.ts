import { badRequest } from '../helpers/http-helper'
import { Controller } from '../protocols/controller'
import { HttpRequest, HttpResponse } from '../protocols/http'

export class SignUpController implements Controller {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const requiredParameters = ['name', 'email', 'password']
    for (const parameter of requiredParameters) {
      if (!httpRequest.body[parameter]) {
        return badRequest(new Error())
      }
    }
  }
}
