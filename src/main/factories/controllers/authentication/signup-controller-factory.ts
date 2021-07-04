import { DbAddAccount } from '../../../../data/use-cases/db-add-account/db-add-account'
import { BcryptAdapter } from '../../../../infra/db/adapters/bcrypt-adapter'
import { EmailValidatorAdapter } from '../../../../infra/db/adapters/email-validator-adapter'
import { UuidAdapter } from '../../../../infra/db/adapters/uuid-adapter'
import { AccountMongoRepository } from '../../../../infra/db/mongodb/account-mongo-repository'
import { SignUpController } from '../../../../presentation/controllers/signup/signup-controller'
import { Controller } from '../../../../presentation/protocols'

export const makeSignUpController = (): Controller => {
  const emailValidator = new EmailValidatorAdapter()
  const uuidAdapter = new UuidAdapter()
  const bcryptAdapter = new BcryptAdapter(12)
  const accountRepository = new AccountMongoRepository()
  const dbAddAccount = new DbAddAccount(uuidAdapter, bcryptAdapter, accountRepository)
  const controller = new SignUpController(emailValidator, dbAddAccount)
  return controller
}
