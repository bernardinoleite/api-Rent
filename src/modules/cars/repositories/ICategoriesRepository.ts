import { Category } from "../entities/Category"

interface ICreateCategoryDTO {
    name: string
    description: string
}


// isso é um contrato
interface ICategoriesRepository {
    create({ name, description }: ICreateCategoryDTO): Promise<void>
    list(): Promise<Category[]>
    findByName(name: string): Promise<Category>
}


export {
    ICategoriesRepository,
    ICreateCategoryDTO
}