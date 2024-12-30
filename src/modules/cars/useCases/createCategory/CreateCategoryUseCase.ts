import { AppError } from "../../../../shared/errors/AppError";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
    name: string
    description: string
}

class CreateCategoryUseCase {

    // aqui estamos a aplicar o principio da inversao de dependencia, uma camada de alto nivel, nao pode conhecer uma camada de baixo nivel
    constructor(private categoriesRepository: ICategoriesRepository) { }

    //sempre vamos criar um execute

    async execute({ name, description }: IRequest): Promise<void> {
        const categoryAlreadExists = await this.categoriesRepository.findByName(name)
        if (categoryAlreadExists) {
            throw new AppError("Category already exists");
        }

        this.categoriesRepository.create({ name, description })
    }

}

export {
    CreateCategoryUseCase
}