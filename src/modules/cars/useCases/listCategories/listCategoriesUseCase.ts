import { Category } from "../../model/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";


class ListCategoriesUseCase {

    constructor(private categoriesRepositoy: ICategoriesRepository) {

    }

    execute(): Category[] {
        const categories = this.categoriesRepositoy.list()
        return categories
    }

}

export {
    ListCategoriesUseCase
}