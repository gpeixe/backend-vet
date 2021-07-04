import { IdGenerator } from '../../../data/protocols/id-generator'
import { v4 as uuidv4 } from 'uuid'

export class UuidAdapter implements IdGenerator {
  generate (): string {
    return uuidv4()
  }
}
