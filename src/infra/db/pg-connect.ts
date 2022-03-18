import  { Pool } from "pg";
import { config as dotenv } from 'dotenv'

dotenv()

const connectionString = `postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:5432/${process.env.POSTGRES_HOST}`
// Connect with a connection pool..

export async function dbInstance() {
    try {
        const instance = new Pool({connectionString});
        return await instance.query("SELECT NOW()")
    } catch (error) {
        console.log(error);
    }
}
