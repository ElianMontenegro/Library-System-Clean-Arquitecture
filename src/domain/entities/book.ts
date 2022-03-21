
export class BookEntity {
    private rentPrice : number;
    constructor(
        private title: string, 
        private id_category: number,
        private price_book: number,
        private page_number?: number,
        private id_autor?: number,
        private year?: string,
        private amount?: number
    ){}


    public setRentPrice(price_book : number) {
        const Porcent = 20;
        let totalPrice = 0;
        totalPrice = price_book * Porcent;
        this.rentPrice = totalPrice / 100;
    }

    public getAll() {
        return {
            title : this.title,
            id_category: this.id_category,
            price_book: this.price_book,
            page_number: this.page_number,
            id_autor: this.id_autor,
            year: this.year,
            rentPrice : this.rentPrice,
            amount : this.amount
        }
    }
}
