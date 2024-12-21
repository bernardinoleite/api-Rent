import { ICreateUserDTO } from "../dtos/ICreateUserDTO"
import { User } from "../entities/User"


interface IUserRepository {

    create({ name, username, password, email, driver_license }: ICreateUserDTO): Promise<void>
    findByEmail(email: string): Promise<User>

}

export {
    IUserRepository
}