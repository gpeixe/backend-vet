import { Collection } from 'mongodb'
import { AddAccountRepository } from '../../../data/protocols/add-account-repository'
import { AccountModel } from '../../../domain/entities/account'
import { MongoHelper } from './mongo-helper'

export class AccountMongoRepository implements AddAccountRepository {
  private async getAccountCollection (): Promise<Collection> {
    return await MongoHelper.getCollection('accounts')
  }

  async add (accountData: AccountModel): Promise<void> {
    const accountCollection = await this.getAccountCollection()
    await accountCollection.insertOne(accountData)
  }
}
