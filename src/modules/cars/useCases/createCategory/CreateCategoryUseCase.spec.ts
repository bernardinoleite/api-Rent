import { AppError } from "../../../../errors/AppError"
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository"
import { CategoriesRepositoryInMemory } from "../../repositories/in-memory/CategoriesRepositoryInMemory"
import { CreateCategoryUseCase } from "./CreateCategoryUseCase"

let createCategoryUseCase: CreateCategoryUseCase
let categoriesRepositoryInMemory: ICategoriesRepository

describe("Create Category", () => {

    beforeEach(() => {
        categoriesRepositoryInMemory = new CategoriesRepositoryInMemory()
        createCategoryUseCase = new CreateCategoryUseCase(categoriesRepositoryInMemory)
    })

    it("Should be able to create a new Category", async () => {
        const category = {
            name: "Category Test",
            description: "Description Category Test"
        }

        await createCategoryUseCase.execute(category)

        const categoryCreated = await categoriesRepositoryInMemory.findByName(category.name)

        expect(categoryCreated).toHaveProperty("id")
    })



})