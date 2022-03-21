
import { dbInstance } from './pg-connect'
import { 
  GetBookByTitleRepository,
  GetBooksByIdsRepository,
  CreateBookRepository,
  UpdateBookRepository
} 
from '../../../../src/data/protocols/db/book'
import { IAddBook } from 'src/domain/use-cases/book/i-add-book'


export class BookPostgresRepository implements 
CreateBookRepository
{
    instance : any
    makeConnection = () => {
        try {
          this.instance = dbInstance()
          return this.instance
        } catch (error) {
            console.log(error);
            return null
        }
       
    }

    async createBook(book : IAddBook.Params): Promise<boolean>{
      const text = 'INSERT INTO book(title, id_category, id_author, amount, page_number, price, rent_price, year ) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *'
      const values = [ 
        book.title, 
        book.id_category, 
        book.id_autor, 
        book.amount, 
        book.page_number, 
        book.price_book,
        book.rentPrice, 
        book.year
      ]
      try {
        const res = await this.makeConnection().query(text, values)
        if(res.rows[0]){
            return true
        }
        return false
      } catch (err) {
        console.log(err.stack)
        return false
      }
    }

 
}