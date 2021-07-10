import { PetModel } from '../../../domain/entities/pet'
import { UpdatePet, UpdatePetModel } from '../../../domain/use-cases/update-pet'
import { UpdatePetRepository } from '../../protocols/update-pet-repository'

export class DbUpdatePet implements UpdatePet {
  constructor (
    private readonly updatePetRepository: UpdatePetRepository
  ) {}

  async update (pet: UpdatePetModel): Promise<PetModel> {
    const updatedPet = await this.updatePetRepository.update(pet)
    return updatedPet
  }
}
