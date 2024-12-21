import { Router } from "express";
import { createUserController } from "../modules/accounts/useCases/createUser";

const usersRouter = Router()


usersRouter.post("/", (request, response) => {
    return createUserController.handle(request, response)
})

export {
    usersRouter
}