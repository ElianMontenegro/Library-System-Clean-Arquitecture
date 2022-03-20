
import { dbInstance } from './pg-connect'
import { 
  CreateCategoryRepository,
  GetAllCategoryRepository,
  GetCategoryByName
} 
from '../../../../src/data/protocols/db/category'


export class CategoryPostgresRepository implements 
CreateCategoryRepository, 
GetAllCategoryRepository, 
GetCategoryByName{
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

    async createCategory(name : string): Promise<boolean>{
        const text = 'INSERT INTO category(name) VALUES($1) RETURNING *'
        const values = [name]
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
    
    async getCategoryByName(name: string): Promise<any>{
      const text = `SELECT * FROM public.category WHERE category.name = '${name}'`
      try {
          const res = await this.makeConnection().query(text)
          const category = res.rows[0];
          if(category){
            return category
          }
          return null
        } catch (err) {
          console.log(err.stack)
          return false
        }
    }

    async getAllCategory(): Promise<any>{
        const text = 'SELECT * FROM public.category'
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
}