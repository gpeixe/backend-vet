import { UpdatePet } from '../../../domain/use-cases/update-pet'
import { MissingParamError } from '../../errors'
import { badRequest, ok, serverError, unauthorized } from '../../helpers/http-helper'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class UpdatePetController implements Controller {
  constructor (
    private readonly updatePet: UpdatePet) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const id = httpRequest.params?.id
      if (!id) {
        return badRequest(new MissingParamError('id'))
      }
      const token = httpRequest.headers?.['x-access-token']
      if (!token) {
        return unauthorized()
      }
      const { name, age, color, breed, weight, owner, description, petPhotoUrl } = httpRequest.body
      const pet = await this.updatePet.update({ id, name, age, color, breed, weight, owner, description, petPhotoUrl })
      return ok(pet)
    } catch (error) {
      console.log('Error: ', error.stack)
      return serverError(error)
    }
  }
}
