import { Category } from "../../infra/typeorm/entities/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoriesRepository";



export class CategoriesRepositoryInMemory implements ICategoriesRepository {
    private categories: Category[] = []

    constructor() {

    }

    async create({ name, description }: ICreateCategoryDTO): Promise<void> {
        const category = new Category()
        Object.assign(category, { name, description, created_at: new Date() })
        this.categories.push(category)

    }
    async list(): Promise<Category[]> {
        return this.categories
    }
    async findByName(name: string): Promise<Category> {
        const category = this.categories.find(category => category.name === name)
        return category
    }

}