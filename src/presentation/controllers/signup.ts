import { badRequest } from '../helpers/http'
import { Controller } from '../protocols/controller'
import { HttpRequest, HttpResponse } from '../protocols/http'

export class SignUpController implements Controller {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const requiredParameters = ['name', 'email']
    for (const parameter of requiredParameters) {
      if (!httpRequest.body[parameter]) {
        return badRequest(new Error())
      }
    }
  }
}
