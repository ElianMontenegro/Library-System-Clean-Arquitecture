import { Router } from "express";
import { AdaptRoute } from "../adapter/express-router-adapter";
import { makeCreateCategoryController } from "../factories/category/controller/create-category-controller-factory";
import { makeGetAllCategoryController } from "../factories/category/controller/get-all-category-controller-factory";

export default (router : Router): void => {
    router.post('/category', AdaptRoute(makeCreateCategoryController()))
    router.get('/category', AdaptRoute(makeGetAllCategoryController()))
}