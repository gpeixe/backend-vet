import { PetModel } from '../entities/pet'

export interface NewPetModel {
  name: string
  age: number
  color: string
  breed: string
  weight: number
  owner: string
  description: string
  petPhotoUrl: string
}

export interface RegisterNewPet {
  register: (newPetModel: NewPetModel) => Promise<PetModel>
}
