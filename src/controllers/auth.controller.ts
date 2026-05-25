import { Request, response, Response } from "express";
import { GDSLoginData, GDSLoginSchema, GdsRegisterData, GdsResigterSchema } from "../validation/zod.js";
import { HelperResponse } from "../types/index.js";
import { register } from "../helpers/register.js";
import { login } from "../helpers/login.js";
import { generateToken } from "../utils/jwt.js";


export async function registerController(req: Request, res: Response){
    const data: GdsRegisterData = req.body
    const result = GdsResigterSchema.safeParse(data)
    if(!result.success){
        return res.status(422).json({
            success: false,
            message: result.error.flatten().fieldErrors
        })
    }
    const helperResponse: HelperResponse = await register(data)
    return res.status(helperResponse.success ? 201 : 403).json(helperResponse)
}

export async function loginController(req: Request, res: Response){
    const data: GDSLoginData = req.body
    const result = GDSLoginSchema.safeParse(data)
    if(!result.success){
        return res.status(422).json({
            success: false,
            message: result.error.flatten().fieldErrors
        })
    }
    const helperResponse = await login(data)
    if(!helperResponse.success){
        return res.status(403).json(helperResponse)
    }
    const token = generateToken(helperResponse.data)
    
    const {data: _, ...response} = helperResponse
    return res.status(200).cookie("token", token, {
        maxAge: 3600000,
        secure: false,
        httpOnly: true,
        sameSite: "lax"
    }).json(response)
}