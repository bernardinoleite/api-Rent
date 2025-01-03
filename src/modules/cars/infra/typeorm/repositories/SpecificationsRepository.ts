import { Specification } from "../entities/Specification";
import { ISpecificationRepository, ICreateSpecificationDTO } from "../../../repositories/ISpecificationsRepository";
import { Repository } from "typeorm"
import { AppDataSource } from "../../../../../../ormConfig"

class SpecificationsRepository implements ISpecificationRepository {

    private repository: Repository<Specification>
    constructor() {
        this.repository = AppDataSource.getRepository(Specification)
    }

    async create({ name, description }: ICreateSpecificationDTO): Promise<void> {

        const specification = this.repository.create({ name, description })

        await this.repository.save(specification)
    }

    async findByName(name: string): Promise<Specification> {
        const specification = await this.repository.findOne({
            where: { name }
        })

        return specification
    }
}

export {
    SpecificationsRepository
}