import { ICreateUserDTO } from "../dtos/ICreateUserDTO"
import { User } from "../infra/typeorm/entities/User"


interface IUserRepository {

    create({ name, password, email, driver_license }: ICreateUserDTO): Promise<void>
    findByEmail(email: string): Promise<User>
    findById(id: string): Promise<User>
    update(user: User): Promise<void>

}

export {
    IUserRepository
}