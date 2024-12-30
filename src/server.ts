import express from "express";
import "express-async-errors"
import { router } from "./shared/infra/http/routes";
import { Request, Response, NextFunction } from "express";
import "./../ormConfig"
import { AppError } from "./errors/AppError";

const app = express();

app.use(express.json())

app.use(router)


router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        res.status(err.statusCode).json({ error: err.message });
        next()
    } else {
        res.status(500).json({ status: "Error", message: 'Internal Server Error', details: err.message });
    }
});

app.listen(2908, "localhost", () => console.log("server is running"));
