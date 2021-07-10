import { GetAllPets } from '../../../domain/use-cases/get-all-pets'
import { noContent, ok, serverError, unauthorized } from '../../helpers/http-helper'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class GetAllPetsController implements Controller {
  constructor (
    private readonly getAllPets: GetAllPets) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      console.log('Calling getAllPets')
      const pets = await this.getAllPets.getAll()
      console.log('Pets: ', pets)
      if (pets.length === 0) {
        return noContent()
      }
      const token = httpRequest.headers?.['x-access-token']
      if (!token) {
        return unauthorized()
      }
      return ok(pets)
    } catch (error) {
      console.log('Error: ', error.message)
      return serverError(error)
    }
  }
}
