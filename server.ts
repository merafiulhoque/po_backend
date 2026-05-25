import app from "./src/app.js"
import dotenv from "dotenv"
dotenv.config({quiet: true})

const PORT = process.env.PORT!

app.listen(PORT ?? 5000, () => {
    console.log(`Server is running at localhost:${PORT}`)
})