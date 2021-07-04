import { Encrypter } from '../../../data/protocols/encrypter'
import jwt from 'jsonwebtoken'

export class JwtAdapter implements Encrypter {
  constructor (
    private readonly secret: string
  ) {}

  async encrypt (token: string): Promise<string> {
    const accessToken = await jwt.sign({ id: token }, this.secret)
    return accessToken
  }
}
