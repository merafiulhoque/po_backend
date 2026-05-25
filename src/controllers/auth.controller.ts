import { Request, Response } from "express";
import { GdsRegisterData, GdsResigterSchema } from "../validation/zod.js";
import { HelperResponse } from "../types/index.js";
import { register } from "../helpers/register.js";

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