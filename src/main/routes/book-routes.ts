import { Router } from "express";
import { AdaptRoute } from "../adapter/express-router-adapter";
import { makeCreateBookController } from "../factories/book/controller/create-book-controller-factory";

export default (router : Router): void => {
    router.post('/book', AdaptRoute(makeCreateBookController()))
}