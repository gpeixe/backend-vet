import { PetModel } from '../entities/pet'

export interface GetAllPets {
  getAll: () => Promise<PetModel[]>
}
