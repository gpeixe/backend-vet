import { AccountModel } from '../../../domain/entities/account'
import { AddAccount, AddAccountModel } from '../../../domain/use-cases/add-account'
import { AddAccountRepository } from '../../protocols/add-account-repository'
import { Hasher } from '../../protocols/hasher'
import { IdGenerator } from '../../protocols/id-generator'

export class DbAddAccount implements AddAccount {
  constructor (
    private readonly idGenerator: IdGenerator,
    private readonly hasher: Hasher,
    private readonly addAccountRepository: AddAccountRepository
  ) {}

  async add (addAccountModel: AddAccountModel): Promise<AccountModel> {
    const id = this.idGenerator.generate()
    const encryptedPassword = await this.hasher.hash(addAccountModel.password)
    addAccountModel.password = encryptedPassword
    const accountModel: AccountModel = {
      id,
      ...addAccountModel
    }
    await this.addAccountRepository.add(accountModel)
    return accountModel
  }
}
