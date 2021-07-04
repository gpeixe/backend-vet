import * as emailValidator from 'email-validator'
import { EmailValidator } from '../../../presentation/protocols/email-validator'

export class EmailValidatorAdapter implements EmailValidator {
  isValid (value: string): boolean {
    return emailValidator.validate(value)
  }
}
