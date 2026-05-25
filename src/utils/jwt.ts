import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import { HelperResponse } from "../types/index.js"
dotenv.config({quiet: true})


export function generateToken(data: any): string{
    return jwt.sign(data, process.env.JWT_SECRET_KEY!, {
        expiresIn: "1h",
        algorithm: "HS256"
    })
}

export function decodeToken(token: string): HelperResponse{
    const key = process.env.JWT_SECRET_KEY!
    const decode = jwt.verify(token, key)
    if(typeof decode === "string"){
        return {
            success: false,
            message: "Invalid token"
        }
    }
    return {
        success: true,
        message: "Token decoded",
        data: decode
    }
}