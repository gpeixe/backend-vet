import { PetModel } from '../../../domain/entities/pet'
import { GetAllPets } from '../../../domain/use-cases/get-all-pets'
import { GetAllPetsRepository } from '../../protocols/get-all-pets-repository'

export class DbGetAllPets implements GetAllPets {
  constructor (
    private readonly getAllPetsRepository: GetAllPetsRepository
  ) {}

  async getAll (): Promise<PetModel[]> {
    console.log('Calling getAllPetsRepository')
    const pets = await this.getAllPetsRepository.getAll()
    return pets
  }
}
