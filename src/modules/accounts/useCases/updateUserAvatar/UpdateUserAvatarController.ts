import { Request, Response } from "express";
import { UpdateUserAvatarUseCase } from "./UpdateUserAvatarUseCase";



class UpdateUserAvatarController {

    constructor(private updateUserAvatarUseCase: UpdateUserAvatarUseCase) {

    }

    async handle(request: Request, response: Response): Promise<Response> {
        const avatar_file = request.file.filename
        const { id: user_id } = request.user
        await this.updateUserAvatarUseCase.execute({ user_id, avatar_file })
        return response.status(204).send()
    }
}


export {
    UpdateUserAvatarController
}