import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";


class ListCategoriesUseCase {

    constructor(private categoriesRepositoy: ICategoriesRepository) {

    }

    async execute(): Promise<Category[]> {
        const categories = await this.categoriesRepositoy.list()
        return categories
    }

}

export {
    ListCategoriesUseCase
}