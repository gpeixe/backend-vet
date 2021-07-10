import { DbDeletePet } from '../../../../data/use-cases/db-delete-pet/db-delete-pet'
import { PetMongoRepository } from '../../../../infra/db/mongodb/pet-mongo-repository'
import { DeletePetController } from '../../../../presentation/controllers/delete-pet/delete-pet-controller'
import { Controller } from '../../../../presentation/protocols'

export const makeDeletePetController = (): Controller => {
  const petRepository = new PetMongoRepository()
  const dbDeletePet = new DbDeletePet(petRepository)
  const controller = new DeletePetController(dbDeletePet)
  return controller
}
