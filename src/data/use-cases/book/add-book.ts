import { AuthorPostgresRepository } from 'src/infra/db/postgres/author-postgres-repository';
import { BookPostgresRepository } from 'src/infra/db/postgres/book-postgres-repository';
import { CategoryPostgresRepository } from 'src/infra/db/postgres/category-postgres-repository';
import { BookEntity } from '../../../domain/entities/book'
import { IAddBook } from '../../../domain/use-cases/book/i-add-book'

export class CreateBook implements IAddBook {
    constructor(
        private bookPostgresRepository : BookPostgresRepository,
        private authorPostgresRepository : AuthorPostgresRepository,
        private categoryPostgresRepository: CategoryPostgresRepository
    ){}
    async execute(params: IAddBook.Params): Promise<boolean>{
        const author = await this.authorPostgresRepository.getAuthorById(params.id_autor)
        const category = await this.categoryPostgresRepository.getCategoryById(params.id_category)
        const AllPromise = await Promise.all([author, category])
        .then(values => {
            for (const iterator of values) {
                if(!iterator){
                    return false
                }
                return true
            }
        })
        .catch((err) => {
            console.log(err);
            return false
        });
        if(!AllPromise){
            return false
        }
        const book = new BookEntity(
            params.title, 
            params.id_category, 
            params.price_book,
            params.page_number,
            params.id_autor,
            params.year,
            params.amount == undefined ? 1 : params.amount
        );
        book.setRentPrice(params.price_book)
        const isSaved = await this.bookPostgresRepository.createBook(book.getAll())
        if(isSaved){
            return true
        }
        return false
    }
    
}