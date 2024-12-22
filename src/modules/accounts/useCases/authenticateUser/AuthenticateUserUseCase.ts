import { IUserRepository } from "../../repositories/IUserRepository";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken"
interface IRequest {
    email: string;
    password: string;
}
interface IResponse {
    user: {
        name: string;
        email: string
    },
    token: string;
}

class AuthenticateUserUseCase {

    constructor(private repository: IUserRepository) { }

    async execute({ email, password }: IRequest): Promise<IResponse> {
        //logica
        const user = await this.repository.findByEmail(email)

        //verificar se o user existe
        if (!user) {
            throw new Error("Email or password incorrect!")
        }
        //verificar se a password está correcta

        const passwordMatch = await compare(password, user.password)

        if (!passwordMatch) {
            throw new Error("Email or password incorrect!")
        }

        //gerar token, caso true
        const token = sign({}, "04448061630924d97c7979e58130c4e0", { subject: user.id, expiresIn: "1d" })

        const tokenReturn: IResponse = {
            user: {
                email: user.email,
                name: user.name
            },
            token
        }

        return tokenReturn
    }
}


export {
    AuthenticateUserUseCase
}