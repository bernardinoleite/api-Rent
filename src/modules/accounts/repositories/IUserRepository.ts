interface ICreateUserDTO {

    name: string;
    username: string
    password: string
    email: string
    driver_license: string

}

interface IUserRepository {

    create({ name, username, password, email, driver_license }: ICreateUserDTO): Promise<void>

}

export {
    IUserRepository
}