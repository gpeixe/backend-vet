import { DbRegisterNewPet } from '../../../../data/use-cases/db-register-new-pet/db-register-new-pet'
import { UuidAdapter } from '../../../../infra/db/adapters/uuid-adapter'
import { PetMongoRepository } from '../../../../infra/db/mongodb/pet-mongo-repository'
import { RegisterNewPetController } from '../../../../presentation/controllers/register-new-pet/register-new-pet-controller'
import { Controller } from '../../../../presentation/protocols'

export const makeRegisterNewPetController = (): Controller => {
  const uuidAdapter = new UuidAdapter()
  const petRepository = new PetMongoRepository()
  const dbRegisterNewPet = new DbRegisterNewPet(uuidAdapter, petRepository)
  const controller = new RegisterNewPetController(dbRegisterNewPet)
  return controller
}
