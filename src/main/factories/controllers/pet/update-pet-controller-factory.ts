import { DbUpdatePet } from '../../../../data/use-cases/db-update-pet/db-update-pet'
import { PetMongoRepository } from '../../../../infra/db/mongodb/pet-mongo-repository'
import { UpdatePetController } from '../../../../presentation/controllers/update-pet/update-pet-controller'
import { Controller } from '../../../../presentation/protocols'

export const makeUpdatePetController = (): Controller => {
  const petRepository = new PetMongoRepository()
  const dbRegisterNewPet = new DbUpdatePet(petRepository)
  const controller = new UpdatePetController(dbRegisterNewPet)
  return controller
}
