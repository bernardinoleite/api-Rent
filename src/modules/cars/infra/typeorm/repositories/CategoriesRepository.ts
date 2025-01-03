import { Repository } from "typeorm"
import { Category } from "../entities/Category"
import { ICategoriesRepository, ICreateCategoryDTO } from "../../../repositories/ICategoriesRepository"

import { AppDataSource } from "../../../../../../ormConfig"

class CategoriesRepository implements ICategoriesRepository {

    private repository: Repository<Category>

    constructor() {
        this.repository = AppDataSource.getRepository(Category)
    }

    async create({ name, description }: ICreateCategoryDTO): Promise<void> {

        const category = this.repository.create({ name, description })

        await this.repository.save(category)
    }

    async list(): Promise<Category[]> {
        const categories = await this.repository.find()
        return categories
    }

    async findByName(name: string): Promise<Category> {
        const category = this.repository.findOne({
            where: {
                name
            }
        })
        return category
    }

}


export {
    CategoriesRepository
}