import { CategoriesRepository } from "../../infra/typeorm/repositories/CategoriesRepository";
import { ListCategoriesController } from "./listCategoriesController";
import { ListCategoriesUseCase } from "./listCategoriesUseCase";

const categoriesRepository = new CategoriesRepository()
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository)
const listCategoriesController = new ListCategoriesController(listCategoriesUseCase)


export {
    listCategoriesController
}