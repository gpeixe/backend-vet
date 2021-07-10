import { PetModel } from '../entities/pet'

export interface UpdatePetModel {
  id: string
  name?: string
  age?: number
  color?: string
  breed?: string
  weight?: number
  owner?: string
  description?: string
  petPhotoUrl?: string
}

export interface UpdatePet {
  update: (pet: UpdatePetModel) => Promise<PetModel>
}
