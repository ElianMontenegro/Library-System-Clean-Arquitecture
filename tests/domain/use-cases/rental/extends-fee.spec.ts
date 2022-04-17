import { ExtendsFee } from '../../../../src/data/use-cases/rental/extends-fee'
import { FindRentWithStatusStandarRepositorySpy } from '../../mooks/mock-db-reader'
import { MailProvider} from '../../../../src/utils-adapter/maill-adapter'

const makeSut = () => {
    const findRentWithStatusStandarRepositorySpy = new FindRentWithStatusStandarRepositorySpy()
    const mailProvider = new MailProvider()
    const sut = new ExtendsFee(findRentWithStatusStandarRepositorySpy, mailProvider)
    return {
        findRentWithStatusStandarRepositorySpy,
        sut
    }
}



describe('extends fee use case', () => {
    it.skip('Should ', async () => {
        const { sut } = makeSut()
        await sut.execute()
    })
})