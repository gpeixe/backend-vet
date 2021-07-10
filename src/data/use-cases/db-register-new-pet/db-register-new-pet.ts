import { PetModel } from '../../../domain/entities/pet'
import { NewPetModel, RegisterNewPet } from '../../../domain/use-cases/register-new-pet'
import { IdGenerator } from '../../protocols/id-generator'
import { RegisterNewPetRepository } from '../../protocols/register-new-pet-repository'

export class DbRegisterNewPet implements RegisterNewPet {
  constructor (
    private readonly idGenerator: IdGenerator,
    private readonly registerNewPetRepository: RegisterNewPetRepository
  ) {}

  async register (newPet: NewPetModel): Promise<PetModel> {
    const id = this.idGenerator.generate()
    const pet: PetModel = Object.assign(newPet, { id })
    await this.registerNewPetRepository.register(pet)
    return pet
  }
}
