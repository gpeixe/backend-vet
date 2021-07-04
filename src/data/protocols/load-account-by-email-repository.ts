import { AccountModel } from '../../domain/entities/account'

export interface LoadAccountByEmailRepository {
  loadByEmail: (email: string) => Promise<AccountModel>
}
