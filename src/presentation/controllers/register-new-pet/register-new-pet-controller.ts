import { RegisterNewPet } from '../../../domain/use-cases/register-new-pet'
import { MissingParamError } from '../../errors'
import { badRequest, created, serverError } from '../../helpers/http-helper'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class RegisterNewPetController implements Controller {
  constructor (
    private readonly registerNewPet: RegisterNewPet) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const requiredFields = ['name', 'age', 'color', 'breed', 'weight', 'owner', 'description', 'petPhotoUrl']
      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }
      const { name, age, color, breed, weight, owner, description, petPhotoUrl } = httpRequest.body
      const pet = await this.registerNewPet.register({ name, age, color, breed, weight, owner, description, petPhotoUrl })
      return created(pet)
    } catch (error) {
      console.log('Error: ', error.stack)
      return serverError(error)
    }
  }
}
