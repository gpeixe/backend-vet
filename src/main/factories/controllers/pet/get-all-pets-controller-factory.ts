import { DbGetAllPets } from '../../../../data/use-cases/db-get-all-pets/db-get-all-pets'
import { PetMongoRepository } from '../../../../infra/db/mongodb/pet-mongo-repository'
import { GetAllPetsController } from '../../../../presentation/controllers/get-all-pets/get-all-pets-controller'
import { Controller } from '../../../../presentation/protocols'

export const makeGetAllPetsController = (): Controller => {
  const petRepository = new PetMongoRepository()
  const dbGetAllPets = new DbGetAllPets(petRepository)
  const controller = new GetAllPetsController(dbGetAllPets)
  return controller
}
