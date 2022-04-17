
import { dbInstance } from './pg-connect'
import { 
    CreateAuthorRepository,
    GetAuthorByName,
    DeleteAuthorById,
    GetAuthorById
} 
from '../../../../src/data/protocols/db/author'


export class AuthorPostgresRepository implements 
CreateAuthorRepository,
GetAuthorByName,
DeleteAuthorById,
GetAuthorById{
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

    async createAuthor(name : string, lastName: string): Promise<boolean>{
        const text = 'INSERT INTO autor(name, lastname) VALUES($1, $2) RETURNING *'
        const values = [name, lastName]
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
    
    async getAuthorByName(name: string): Promise<any>{
      const text = `SELECT * FROM public.autor WHERE autor.name = '${name}'`
      try {
          const res = await this.makeConnection().query(text)
          const author = res.rows[0];
          if(author){
            return author
          }
          return null
        } catch (err) {
          console.log(err.stack)
          return false
        }
    }

    async getAllAuthor(): Promise<any>{
      const text = 'SELECT * FROM public.autor'
      try {
        const res = await this.makeConnection().query(text)
        if(res.rows.length >= 1){
          return res.rows
        }
        return false
      } catch (err) {
        console.log(err.stack)
      }
    }

    async deleteAuthorById(id : number): Promise<any>{
      const text = `DELETE FROM public.autor WHERE id = '${id}'`
      try {
        const res = await this.makeConnection().query(text)
        if(res.rows.length = 1){
          return true
        }
        return false
      } catch (err) {
        return false
      }
    }

    async getAuthorById(id: number): Promise<any>{
      const text = `SELECT * FROM public.autor WHERE autor.id = '${id}'`
      try {
        const res = await this.makeConnection().query(text)
        const author = res.rows[0];
        if(author){
          return author
        }
        return null
      } catch (err) {
        console.log(err.stack)
        return false
      }
    }
}