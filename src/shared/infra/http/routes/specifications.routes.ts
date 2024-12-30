import { Router } from "express";
import { createSpecificationController } from "../../../../modules/cars/useCases/createSpecification";
import { ensureAuthenticated } from "../../../../shared/infra/http/middlewares/ensureAuthenticated";

const specificationRoutes = Router()


specificationRoutes.use(ensureAuthenticated)
specificationRoutes.post("/", (request, response) => {
    return createSpecificationController.handle(request, response)
})



export {
    specificationRoutes
}