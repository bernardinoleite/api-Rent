import { Router, Request, Response, NextFunction } from "express";
import { categoriesRoutes } from "./categories.routes";
import { specificationRoutes } from "./specifications.routes";
import { usersRouter } from "./users.routes";
import { authenticateRoutes } from "./authenticate.routes";
import { AppError } from "../errors/AppError";

const router = Router()
router.use("/categories", categoriesRoutes)
router.use("/specifications", specificationRoutes)
router.use("/users", usersRouter)
router.use(authenticateRoutes)


export {
    router
}