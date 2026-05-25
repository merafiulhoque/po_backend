import express from "express"
import cors from "cors"

//import utilities
import { errorHandler } from "./utils/errorHandler.js";

//import routers
import authRouter from "./routers/authRouter.js";


const app = express()

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["*"]
}))

// routers
app.use("/api/auth", authRouter)


// error handler
app.use(errorHandler)
export default app;