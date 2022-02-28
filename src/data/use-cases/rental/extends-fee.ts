import { FindRentWithStatusStandarRepository } from "src/data/protocols/db/reader/find-rent-with-status-standar-repository";
import { IRentalEntenty, RentalEntenty, RentStatus } from "../../../../src/domain/entities/rental";
import { IExtendsFee } from "src/domain/use-cases/rental/i-extends-fee";
import { MailProvider } from "src/utils-adapter/maill-adapter";

export class ExtendsFee implements IExtendsFee {
    constructor(
        private findRentWithStatusStandar : FindRentWithStatusStandarRepository,
        private sendEmail : MailProvider
    ){}
    async execute(): Promise<void>{
        const ordersRent = await this.findRentWithStatusStandar.execute();
        const rentalEntenty = new RentalEntenty()
        
        const extendsFee = (orderRent : IRentalEntenty): void =>{
            let dateNow = new Date()
            if(dateNow > orderRent.finalDate){
                orderRent.rentStatus = RentStatus.EXTENDS
                orderRent.extendsPrice = rentalEntenty.setExtendsPrice(orderRent.totalPrice)
                // send email
                this.sendEmail.execute({
                    to: {
                        name: orderRent.reader.name,
                        email: orderRent.reader.email,
                    },
                    template: 'extends-fee',
                    subject: "Hello ✔", // Subject line
                    context : {
                        senderName : orderRent.reader.name,
                        book : orderRent.books[0],
                        extendsPrice : orderRent.extendsPrice
                    }
                })
            }
        }
        
        ordersRent.forEach((orderRent) => {
            extendsFee(orderRent);
        })
    }

}