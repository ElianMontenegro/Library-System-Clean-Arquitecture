

export class BookEntity {
    private rentPrice : number;

    constructor(
        private title: string, 
        private category_id: string,
        private price_book: number,
        private page_number?: number,
        private autor?: string,
        private year?: string
    ){}


    public setRentPrice(price_book : number) {
        const Porcent = 20;
        let totalPrice = 0;
        totalPrice = price_book * Porcent;
        this.rentPrice = totalPrice / 100;
    }

    public get getAll() {
        return {
            title : this.title,
            category_id: this.category_id,
            price_book: this.price_book,
            page_number: this.page_number,
            autor: this.autor,
            year: this.year,
            rentPrice : this.rentPrice
        }
    }
    
}