import { Response, Request } from "express";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";



class CreateSpecificationController {
    constructor(private createCategoryUseCase: CreateSpecificationUseCase) {

    }

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, description } = request.body
        await this.createCategoryUseCase.execute({ name, description })
        return response.status(201).send()
    }
}


export {
    CreateSpecificationController
}