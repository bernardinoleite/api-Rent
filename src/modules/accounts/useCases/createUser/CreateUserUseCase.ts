import { hash } from "bcrypt";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUserRepository } from "../../repositories/IUserRepository";


class CreateUserUseCase {
    constructor(private userRepository: IUserRepository) {

    }

    async execute({ name, username, password, email, driver_license }: ICreateUserDTO): Promise<void> {

        const userAlreadyExists = await this.userRepository.findByEmail(email)

        if (userAlreadyExists) {
            throw new Error("User alread exists")
        }
        const passwordHash = await hash(password, 9)
        await this.userRepository.create({ name, username, password: passwordHash, email, driver_license })

    }
}

export {
    CreateUserUseCase
}