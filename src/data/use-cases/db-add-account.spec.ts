import { AccountModel } from '../../domain/entities/account'
import { AddAccountModel } from '../../domain/use-cases/add-account'
import { AddAccountRepository } from '../protocols/add-account-repository'
import { Hasher } from '../protocols/hasher'
import { IdGenerator } from '../protocols/id-generator'
import { DbAddAccount } from './db-add-account'

class IdGeneratorStub implements IdGenerator {
  generate (): string {
    return 'any_id'
  }
}

class HasherStub implements Hasher {
  async hash (value: any): Promise<string> {
    return await new Promise(resolve => resolve('hashed_password'))
  }
}

class AddAccountRepositoryStub implements AddAccountRepository {
  async add (account: AccountModel): Promise<void> {
    return null
  }
}

const makeSut = (): SutTypes => {
  const idGenerator = new IdGeneratorStub()
  const addAccountRepository = new AddAccountRepositoryStub()
  const hasher = new HasherStub()
  const sut = new DbAddAccount(idGenerator, hasher, addAccountRepository)
  return {
    sut,
    idGenerator,
    addAccountRepository,
    hasher
  }
}

interface SutTypes {
  sut: DbAddAccount
  idGenerator: IdGenerator
  addAccountRepository: AddAccountRepository
  hasher: Hasher
}

const makeAccountModel = (): AccountModel => {
  return {
    id: 'any_id',
    name: 'any_name',
    email: 'any_email@email.com',
    password: 'hashed_password'
  }
}

describe('SignUp Controller', () => {
  test('Should call idGenerator', async () => {
    const { sut, idGenerator } = makeSut()
    const generateSpy = jest.spyOn(idGenerator, 'generate')
    const addAccountModel: AddAccountModel = {
      name: 'any_name',
      email: 'any_email@email.com',
      password: 'any_password'
    }
    await sut.add(addAccountModel)
    expect(generateSpy).toHaveBeenCalled()
  })

  test('Should call accountRepository with AccountModel', async () => {
    const { sut, addAccountRepository } = makeSut()
    const addSpy = jest.spyOn(addAccountRepository, 'add')
    const accountModel: AddAccountModel = {
      name: 'any_name',
      email: 'any_email@email.com',
      password: 'any_password'
    }
    await sut.add(accountModel)
    expect(addSpy).toHaveBeenCalledWith(makeAccountModel())
  })

  test('Should call hasher with password', async () => {
    const { sut, hasher } = makeSut()
    const hashSpy = jest.spyOn(hasher, 'hash')
    const accountModel: AddAccountModel = {
      name: 'any_name',
      email: 'any_email@email.com',
      password: 'any_password'
    }
    await sut.add(accountModel)
    expect(hashSpy).toHaveBeenCalledWith('any_password')
  })

  test('Should call accountRepository with AccountModel', async () => {
    const { sut, addAccountRepository } = makeSut()
    const addSpy = jest.spyOn(addAccountRepository, 'add')
    const accountModel: AddAccountModel = {
      name: 'any_name',
      email: 'any_email@email.com',
      password: 'any_password'
    }
    await sut.add(accountModel)
    expect(addSpy).toHaveBeenCalledWith(makeAccountModel())
  })

  test('Should throw if idGenerator throws', async () => {
    const { sut, idGenerator } = makeSut()
    jest.spyOn(idGenerator, 'generate').mockImplementationOnce(() => {
      throw new Error()
    })
    const accountModel: AddAccountModel = {
      name: 'any_name',
      email: 'any_email@email.com',
      password: 'any_password'
    }
    const promise = sut.add(accountModel)
    await expect(promise).rejects.toThrow()
  })

  test('Should throw if addAccountRepository throws', async () => {
    const { sut, addAccountRepository } = makeSut()
    jest.spyOn(addAccountRepository, 'add').mockImplementationOnce(() => {
      throw new Error()
    })
    const accountModel: AddAccountModel = {
      name: 'any_name',
      email: 'any_email@email.com',
      password: 'any_password'
    }
    const promise = sut.add(accountModel)
    await expect(promise).rejects.toThrow()
  })

  test('Should return the added account on success', async () => {
    const { sut } = makeSut()
    const accountModel: AddAccountModel = {
      name: 'any_name',
      email: 'any_email@email.com',
      password: 'any_password'
    }
    const account = await sut.add(accountModel)
    expect(account).toEqual(makeAccountModel())
  })
})
