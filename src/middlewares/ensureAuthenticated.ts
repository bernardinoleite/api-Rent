import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken"
import { UserRepository } from "../modules/accounts/repositories/implementations/UserRepository";


export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {

    const authHeader = request.headers.authorization

    if (!authHeader) {
        throw new Error("Token missing")
    }

    const [, token] = authHeader.split(" ")
    try {
        const { sub: id } = verify(token, "04448061630924d97c7979e58130c4e0")

        const userRepository = new UserRepository()
        const user = await userRepository.findById(id)

        if (!user) {
            throw new Error("User does not exists")
        }
        request.user = user

        console.log()
        next()
    } catch (error) {
        throw new Error("Invalid token")
    }

}