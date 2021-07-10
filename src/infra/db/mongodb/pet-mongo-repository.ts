import { Collection } from 'mongodb'
import { DeletePetRepository } from '../../../data/protocols/delete-pet-repository'
import { GetAllPetsRepository } from '../../../data/protocols/get-all-pets-repository'
import { RegisterNewPetRepository } from '../../../data/protocols/register-new-pet-repository'
import { PetModel } from '../../../domain/entities/pet'
import { MongoHelper } from './mongo-helper'

export class PetMongoRepository implements RegisterNewPetRepository, GetAllPetsRepository, DeletePetRepository {
  private async getPetCollection (): Promise<Collection> {
    return await MongoHelper.getCollection('pets')
  }

  async register (pet: PetModel): Promise<void> {
    const petCollection = await this.getPetCollection()
    await petCollection.insertOne(pet)
  }

  async getAll (): Promise<PetModel[]> {
    const petCollection = await this.getPetCollection()
    const petsInDb = await petCollection.find({}).toArray()
    const pets = this.mapAll(petsInDb)
    return pets
  }

  async delete (id: string): Promise<void> {
    const petCollection = await this.getPetCollection()
    await petCollection.deleteOne({ id })
  }

  private mapOne (dbItem): PetModel {
    const { id, name, age, color, breed, weight, owner, description, petPhotoUrl } = dbItem
    const pet: PetModel = { id, name, age, color, breed, weight, owner, description, petPhotoUrl }
    return pet
  }

  private mapAll (dbCursor): PetModel[] {
    const pets = []
    console.log(dbCursor)
    for (const dbItem of dbCursor) {
      pets.push(this.mapOne(dbItem))
    }
    return pets
  }
}
