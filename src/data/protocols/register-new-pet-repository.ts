import { PetModel } from '../../domain/entities/pet'

export interface RegisterNewPetRepository {
  register: (pet: PetModel) => Promise<void>
}
