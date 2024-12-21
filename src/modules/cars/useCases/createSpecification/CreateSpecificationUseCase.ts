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
            throw new Error("Specification alread Exist");
        }

        await this.specificationRepository.create({ name, description })

    }


}


export {
    CreateSpecificationUseCase
}