import { badRequest } from '../helpers/http'
import { Controller } from '../protocols/controller'
import { HttpRequest, HttpResponse } from '../protocols/http'

export class SignUpController implements Controller {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const { name } = httpRequest.body
    if (!name) {
      return badRequest(new Error())
    }
  }
}
