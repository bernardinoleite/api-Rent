import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken"
import { UserRepository } from "../modules/accounts/infra/typeorm/repositories/UserRepository";
import { AppError } from "../shared/errors/AppError";


export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {

    const authHeader = request.headers.authorization

    if (!authHeader) {
        throw new AppError("Token missing", 401)
    }

    const [, token] = authHeader.split(" ")
    try {
        const { sub: user_id } = verify(token, "04448061630924d97c7979e58130c4e0")

        const userRepository = new UserRepository()
        const user = await userRepository.findById(user_id)

        if (!user) {
            throw new AppError("User does not exists", 401)
        }
        request.user = {
            id: user_id
        }


        next()
    } catch (error) {
        throw new AppError("Invalid token", 401)
    }

}