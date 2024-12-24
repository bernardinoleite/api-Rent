import { response, Router } from "express";
import { createUserController } from "../modules/accounts/useCases/createUser";
import { updateUserAvatarController } from "../modules/accounts/useCases/updateUserAvatar";
import multer from "multer";
import uploadConfig from "../config/upload/upload";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const usersRouter = Router()
const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"))

usersRouter.post("/", (request, response) => {
    return createUserController.handle(request, response)
})

usersRouter.patch("/avatar", ensureAuthenticated, uploadAvatar.single("avatar"), (request, response) => {
    return updateUserAvatarController.handle(request, response)
})

export {
    usersRouter
}