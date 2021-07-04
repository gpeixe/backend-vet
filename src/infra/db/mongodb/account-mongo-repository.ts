import { Collection } from 'mongodb'
import { AddAccountRepository } from '../../../data/protocols/add-account-repository'
import { LoadAccountByEmailRepository } from '../../../data/protocols/load-account-by-email-repository'
import { UpdateAccessTokenRepository } from '../../../data/protocols/update-access-token-repository'
import { AccountModel } from '../../../domain/entities/account'
import { MongoHelper } from './mongo-helper'

export class AccountMongoRepository implements AddAccountRepository, LoadAccountByEmailRepository, UpdateAccessTokenRepository {
  private async getAccountCollection (): Promise<Collection> {
    return await MongoHelper.getCollection('accounts')
  }

  async updateAccessToken (id: string, token: string): Promise<void> {
    const accountCollection = await this.getAccountCollection()
    await accountCollection.updateOne({
      id: id
    }, {
      $set: {
        accessToken: token
      }
    })
  }

  async add (accountData: AccountModel): Promise<void> {
    const accountCollection = await this.getAccountCollection()
    await accountCollection.insertOne(accountData)
  }

  async loadByEmail (email: string): Promise<AccountModel> {
    const accountCollection = await this.getAccountCollection()
    const account = await accountCollection.findOne({ email })
    return account
  }
}
