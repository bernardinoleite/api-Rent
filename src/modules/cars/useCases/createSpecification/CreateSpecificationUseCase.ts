import { AppError } from "../../../../shared/errors/AppError";
import { ISpecificationRepository } from "../../repositories/ISpecificationsRepository";


interface IRequest {
    name: string
    description: string
}

class CreateSpecificationUseCase {

    constructor(private specificationRepository: ISpecificationRepository) { }

    async execute({ name, description }: IRequest): Promise<void> {
        const specificationAlreadExists = await this.specificationRepository.findByName(name)

        if (specificationAlreadExists) {
            throw new AppError("Specification already Exist");
        }

        await this.specificationRepository.create({ name, description })

    }


}


export {
    CreateSpecificationUseCase
}