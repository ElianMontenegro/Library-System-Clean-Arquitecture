import { config as dotenv } from 'dotenv'
import app from './config/app'

dotenv()
app.listen(process.env.PORT, () => console.log(`Server running at http://localhost:${process.env.PORT}`))

