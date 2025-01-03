import { hash } from "bcrypt";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUserRepository } from "../../repositories/IUserRepository";
import { AppError } from "../../../../shared/errors/AppError";


class CreateUserUseCase {
    constructor(private userRepository: IUserRepository) {

    }

    async execute({ name, password, email, driver_license }: ICreateUserDTO): Promise<void> {

        const userAlreadyExists = await this.userRepository.findByEmail(email)

        if (userAlreadyExists) {
            throw new AppError("User already exists")
        }
        const passwordHash = await hash(password, 9)
        await this.userRepository.create({ name, password: passwordHash, email, driver_license })

    }
}

export {
    CreateUserUseCase
}