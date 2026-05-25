import prisma from "../lib/prisma.js";
import { HelperResponse } from "../types/index.js";
import { hashPassword } from "../utils/bcrypt.js";
import { GdsRegisterData } from "../validation/zod.js";

export async function register(data: GdsRegisterData): Promise<HelperResponse>{
    const existingGds = await prisma.gds.findUnique({
        where: {empId: data.empId}
    })
    if(existingGds){
        return {
            success: false,
            message: `${data.empId} already registered, Please login`
        }
    }
    const hash = await hashPassword(data.password)
    const newUser = await prisma.gds.create({
        data: {
            ...data,
            password: hash
        }
    })
    return {
        success: true,
        message: `${data.empId} registered successfully`
    }
}