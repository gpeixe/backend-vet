import { AccountModel } from '../../domain/entities/account'

export interface AddAccountRepository {
  add: (accountModel: AccountModel) => Promise<void>
}
