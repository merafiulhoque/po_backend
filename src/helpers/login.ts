import prisma from "../lib/prisma.js";
import { HelperResponse } from "../types/index.js";
import { verifyPassword } from "../utils/bcrypt.js";
import { GDSLoginData } from "../validation/zod.js";

export async function login(data: GDSLoginData): Promise<HelperResponse>{
    const existingGds = await prisma.gds.findUnique({
        where: {empId: data.empId},
        select: {
            empId: true,
            name: true,
            role: true,
            office: true,
            acOffice: true,
            password: true,
            isPremium: true
        }
    })

    if(!existingGds){
        return {
            success: false,
            message: `Employee id: ${data.empId} is not registered`
        }
    }
    const isPassOk = await verifyPassword(data.password, existingGds.password)
    if(!isPassOk){
        return {
            success: false,
            message: "Invalid credentials"
        }
    }
    return {
        success: true,
        message: "Login Successfull",
        data: existingGds
    }
}