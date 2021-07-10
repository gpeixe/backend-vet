import { DeletePet } from '../../../domain/use-cases/delete-pet'
import { MissingParamError } from '../../errors'
import { badRequest, noContent, serverError } from '../../helpers/http-helper'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class DeletePetController implements Controller {
  constructor (
    private readonly deletePet: DeletePet) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      console.log('Calling getAllPets')
      const id = httpRequest.params?.id
      if (!id) {
        return badRequest(new MissingParamError('id'))
      }
      await this.deletePet.delete(id)
      return noContent()
    } catch (error) {
      console.log('Error: ', error.message)
      return serverError(error)
    }
  }
}
