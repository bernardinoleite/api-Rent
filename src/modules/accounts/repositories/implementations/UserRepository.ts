import { Repository } from "typeorm";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUserRepository } from "../IUserRepository";
import { User } from "../../entities/User";
import { AppDataSource } from "../../../../../ormConfig";


class UserRepository implements IUserRepository {

    private repository: Repository<User>

    constructor() {
        this.repository = AppDataSource.getRepository(User)
    }

    async create({ name, username, password, email, driver_license }: ICreateUserDTO): Promise<void> {

        const user = this.repository.create({ name, username, password, email, driver_license })
        await this.repository.save(user)

    }
    async findByEmail(email: string): Promise<User> {
        const user = await this.repository.findOneBy({ email })
        return user
    }
}

export {
    UserRepository
}