import { Hasher } from '../../../src/data/protocols/cryptography/hasher'
import faker from 'faker'

export class HasherSpy implements Hasher {
    plaintext : string
    hashed = faker.datatype.uuid()
    async hash(plaintext: string): Promise<string>{
        this.plaintext = plaintext
        return this.hashed
    }
}
