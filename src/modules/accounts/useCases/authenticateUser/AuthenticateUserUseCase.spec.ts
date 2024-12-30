import { AppError } from "../../../../shared/errors/AppError"
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO"
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory"
import { CreateUserUseCase } from "../createUser/CreateUserUseCase"
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase"

let usersRepositoryInMemory: UsersRepositoryInMemory
let authenticateUserUseCase: AuthenticateUserUseCase
let createUseUseCase: CreateUserUseCase


describe("Authenticate User", () => {

    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory()
        createUseUseCase = new CreateUserUseCase(usersRepositoryInMemory)
        authenticateUserUseCase = new AuthenticateUserUseCase(usersRepositoryInMemory)
    })

    it("Should be able to authenticate an user", async () => {
        const user: ICreateUserDTO = {
            driver_license: "00A132",
            email: "Bernardino@gmail.com",
            name: "Bernardino Leite",
            password: "12345"
        }
        await createUseUseCase.execute(user)
        const result = await authenticateUserUseCase.execute({
            email: user.email,
            password: user.password
        })

        expect(result).toHaveProperty("token")

    })


    it("should not be able to athenticate an nonexistent user", () => {

        expect(async () => {
            await authenticateUserUseCase.execute({ email: "false@email.com", password: "12321" })
        }).rejects.toBeInstanceOf(AppError)

    })

    it("should not be ableto authenticate with incorrect password ", () => {


        expect(async () => {
            const user: ICreateUserDTO = {
                driver_license: "00A132",
                email: "Bernardino@gmail.com",
                name: "Bernardino Leite",
                password: "12345"
            }

            await createUseUseCase.execute(user)
            await authenticateUserUseCase.execute({ email: user.email, password: "IncorrectPassword" })

        }).rejects.toBeInstanceOf(AppError)
    })


})