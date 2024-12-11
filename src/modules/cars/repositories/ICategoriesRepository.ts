import { Category } from "../model/Category"

interface ICreateCategoryDTO {
    name: string
    description: string
}


// isso é um contrato
interface ICategoriesRepository {
    create({ name, description }: ICreateCategoryDTO): void
    list(): Category[]
    findByName(name: string): Category
}


export {
    ICategoriesRepository,
    ICreateCategoryDTO
}