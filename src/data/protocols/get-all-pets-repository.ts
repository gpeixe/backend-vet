import { PetModel } from '../../domain/entities/pet'

export interface GetAllPetsRepository {
  getAll: () => Promise<PetModel[]>
}
