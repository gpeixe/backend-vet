import { DbAuthentication } from '../../../../data/use-cases/db-authentication/db-authentication'
import { BcryptAdapter } from '../../../../infra/db/adapters/bcrypt-adapter'
import { JwtAdapter } from '../../../../infra/db/adapters/jwt-adapter'
import { AccountMongoRepository } from '../../../../infra/db/mongodb/account-mongo-repository'
import { LoginController } from '../../../../presentation/controllers/login/login-controller'
import { Controller } from '../../../../presentation/protocols'

export const makeLoginController = (): Controller => {
  const accountRepository = new AccountMongoRepository()
  const bcryptAdapter = new BcryptAdapter(12)
  const jwtAdapter = new JwtAdapter('tj6we4==5')
  const dbAuthentication = new DbAuthentication(accountRepository, bcryptAdapter, jwtAdapter, accountRepository)
  const controller = new LoginController(dbAuthentication)
  return controller
}
