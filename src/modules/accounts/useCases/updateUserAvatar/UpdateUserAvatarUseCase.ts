import { deleteFile } from "../../../../utils/file";
import { IUserRepository } from "../../repositories/IUserRepository";

//adicionar coluna avatar na tabela users
//refactorar usuario com coluna avatar
//configurar upload com multer
//criar regra de negocio com multer
//criar controller
interface IRequest {
    user_id: string
    avatar_file: string
}
class UpdateUserAvatarUseCase {

    constructor(private repository: IUserRepository) {
    }

    async execute({ user_id, avatar_file }: IRequest): Promise<void> {
        const user = await this.repository.findById(user_id)

        if (user.avatar) {

            await deleteFile(`${__dirname}/../../../../tmp/avatar/${user.avatar}`)
        }

        user.avatar = avatar_file
        await this.repository.update(user)
    }

}


export {
    UpdateUserAvatarUseCase
}