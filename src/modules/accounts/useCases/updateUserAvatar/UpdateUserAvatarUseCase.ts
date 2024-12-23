import { IUserRepository } from "../../repositories/IUserRepository";



class UpdateUserAvatarUseCase {

    constructor(private repository: IUserRepository) {
    }

    async execute() { }

}


export {
    UpdateUserAvatarUseCase
}