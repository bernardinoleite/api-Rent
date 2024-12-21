import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUserRepository } from "../../repositories/IUserRepository";


class CreateUserUseCase {
    constructor(private userRepository: IUserRepository) {

    }

    async execute({ name, username, password, email, driver_license }: ICreateUserDTO): Promise<void> {

        await this.userRepository.create({ name, username, password, email, driver_license })

    }
}

export {
    CreateUserUseCase
}