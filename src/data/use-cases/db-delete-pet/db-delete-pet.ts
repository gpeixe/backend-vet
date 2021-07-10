import { DeletePet } from '../../../domain/use-cases/delete-pet'
import { DeletePetRepository } from '../../protocols/delete-pet-repository'

export class DbDeletePet implements DeletePet {
  constructor (
    private readonly deletePetRepository: DeletePetRepository
  ) {}

  async delete (id: string): Promise<void> {
    await this.deletePetRepository.delete(id)
  }
}
