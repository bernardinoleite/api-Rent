import { Response, Request } from "express";
import { CreateCategoryServices } from "../../services/CreateCategoryService";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";



class CreateSpecificationController {
    constructor(private createCategoryUseCase: CreateSpecificationUseCase) {

    }

    handle(request: Request, response: Response): Response {
        const { name, description } = request.body
        this.createCategoryUseCase.execute({ name, description })

        return response.status(201).send()
    }
}


export {
    CreateSpecificationController
}