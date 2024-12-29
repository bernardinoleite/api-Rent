import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";




export class UsersRepositoryInMemory implements IUserRepository {

    private users: User[] = []
    constructor() {

    }
    async create({ name, password, email, driver_license }: ICreateUserDTO): Promise<void> {

        const user = new User()

        Object.assign(user, { name, password, email, driver_license })

        this.users.push(user)

    }
    async findByEmail(email: string): Promise<User> {
        const user = this.users.find(user => user.email === email)
        return user
    }
    async findById(id: string): Promise<User> {
        const user = this.users.find(user => user.id === id)
        return user
    }
    async update(user: User): Promise<void> {
        const IndexUser = this.users.findIndex(u => u.id === user.id)
        Object.assign(this.users[IndexUser], user)
    }

}