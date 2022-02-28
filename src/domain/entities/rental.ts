
export interface IRentalEntenty {
    date? : Date,
    finalDate? : Date,
    rentStatus? : RentStatus,
    books : string[],
    reader : any,
    totalPrice : number,
    extendsPrice? : number,
}

export class RentalEntenty {
    private books : string[]
    private reader : any
    private date = new Date();
    private finalDate : Date;
    private rentStatus = RentStatus.STANDARD;
    private extendsPrice = 0

    constructor(
        b: Partial<IRentalEntenty> = {}
    ){
        Object.assign(this, b);
        this.setFinalDate(new Date())
    }

    public setFinalDate(date: Date) {
        const DAYS = 30;
        this.finalDate = new Date(date.setDate(date.getDate() + DAYS))
        return this.finalDate
    }

    public setExtendsPrice(total_price : number) {
        const extendsPorcentage = 15
        let totalPriceExtends = 0;
        totalPriceExtends = total_price * extendsPorcentage;
        return totalPriceExtends / 100;
    }

    // public extendsFee (orderRent : IRentalEntenty): IRentalEntenty{
    //     let dateNow = new Date()
    //     if(dateNow > orderRent.finalDate){
    //         orderRent.rentStatus = RentStatus.EXTENDS
    //         orderRent.extendsPrice = this.setExtendsPrice(orderRent.totalPrice)
    //         // send email
    //         return orderRent
    //     }
    // }
}

export enum RentStatus {
    'STANDARD',
    'EXTENDS',
    'SELL',
    'CANCELED',
}