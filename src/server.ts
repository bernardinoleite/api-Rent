import express from "express";
import { router } from "./routes";
import "./../ormConfig"
const app = express();
app.use(express.json())
app.use((error, request, response, next) => {

    console.log("erroo leite")
    next()
})
app.use(router)

app.listen(2908, "localhost", () => console.log("server is running"));
