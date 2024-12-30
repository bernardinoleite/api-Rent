import { UserRepository } from "../../infra/typeorm/repositories/UserRepository";
import { AuthenticateUserController } from "./AuthenticateUserController";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";


const userRepository = new UserRepository()
const authenticateUserUseCase = new AuthenticateUserUseCase(userRepository)
const authenticateUserController = new AuthenticateUserController(authenticateUserUseCase)


export {
    authenticateUserController
}