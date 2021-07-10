import { Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter'
import { makeDeletePetController } from '../factories/controllers/pet/delete-pet-controller-factory'
import { makeGetAllPetsController } from '../factories/controllers/pet/get-all-pets-controller-factory'
import { makeRegisterNewPetController } from '../factories/controllers/pet/register-new-pet-controller-factory'

export default (router: Router): void => {
  router.post('/pets', adaptRoute(makeRegisterNewPetController()))
  router.get('/pets', adaptRoute(makeGetAllPetsController()))
  router.delete('/pets/:id', adaptRoute(makeDeletePetController()))
}
