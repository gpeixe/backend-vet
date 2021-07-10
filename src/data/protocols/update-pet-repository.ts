import { PetModel } from '../../domain/entities/pet'
import { UpdatePetModel } from '../../domain/use-cases/update-pet'

export interface UpdatePetRepository {
  update: (pet: UpdatePetModel) => Promise<PetModel>
}
