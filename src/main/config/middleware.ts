import { Express } from 'express'
import { bodyParse } from '../midllwares/body-parse'
import { cors } from '../midllwares/cors'
export default (app : Express): void => {
    app.use(bodyParse)
    app.use(cors)
}