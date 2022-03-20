import { Router } from "express";
import { AdaptRoute } from "../adapter/express-router-adapter";
import { makeCreateAuthorController } from "../factories/author/controller/create-author-controller-factory";

export default (router : Router): void => {
    router.post('/author', AdaptRoute(makeCreateAuthorController()))

}