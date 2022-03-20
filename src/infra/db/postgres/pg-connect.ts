import  { Pool } from "pg";
import { config as dotenv } from 'dotenv'

dotenv()

const connectionString = `postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:5432/${process.env.POSTGRES_DATABASE}`
// Connect with a connection pool..

export function dbInstance() {
    try {
        const instance = new Pool({connectionString});
        return instance
    } catch (error) {
        console.log(error);
        return null
    }
}
