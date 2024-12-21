import { hash } from "bcrypt";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUserRepository } from "../../repositories/IUserRepository";


class CreateUserUseCase {
    constructor(private userRepository: IUserRepository) {

    }

    async execute({ name, username, password, email, driver_license }: ICreateUserDTO): Promise<void> {

        const passwordHash = await hash(password, 9)
        await this.userRepository.create({ name, username, password: passwordHash, email, driver_license })

    }
}

export {
    CreateUserUseCase
}