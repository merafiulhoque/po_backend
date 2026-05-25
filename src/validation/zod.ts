import z from "zod"


const RoleEnum = z.enum(["GDS_BPM", "GDS_ABPM", "GDS_DAKSEVAK"]);

export const GdsResigterSchema = z.object({
    empId: z.string().length(8, "Employee Id should be of length 8").refine(str => /^\d+$/.test(str), {message: "Only   numbers allowed"}),
    name: z.string().regex(/^[A-Za-z\s]+$/, {
        message: "Only alphabets and spaces are allowed"
        }).refine(str => str.toUpperCase()),
    role: RoleEnum,
    office: z.string().regex(/^[A-Za-z\s]+$/, {
        message: "Only alphabets and spaces are allowed"
        }).refine(str => str.toUpperCase()),
    acOffice: z.string().regex(/^[A-Za-z\s]+$/, {
        message: "Only alphabets and spaces are allowed"
        }).refine(str => str.toUpperCase()),
    salaryAc: z.string().refine(str => str.length === 10 || str.length === 12).refine(str => /^\d+$/.test(str), {message: "Only numbers allowed"}),
    password: z.string().min(6, "At least 6 characters needed").max(20, "Max 20 allowed")
})

export type GdsRegisterData = z.infer<typeof GdsResigterSchema>

export const SubRegisterSchema = z.object({
    subId: z.string().length(8, "Employee Id should be of length 8").refine(str => /^\d+$/.test(str), {message: "Only numbers allowed"}),
    name: z.string().regex(/^[A-Za-z\s]+$/, {
        message: "Only alphabets and spaces are allowed"
        }).refine(str => str.toUpperCase()),
    age: z.number().min(18, "Age less than 18 not allowed").max(60, "Max 60 age allowed"),
    subAc: z.string().refine(str => str.length === 8 || str.length === 12).refine(str => /^\d+$/.test(str), {message: "Only numbers allowed"}),
    address: z.string().min(6, "Required")
})

export type SubRegisterData = z.infer<typeof SubRegisterSchema>

export const GDSLoginSchema = z.object({
    empId: z.string().length(8, "Employee Id should be of length 8").refine(str => /^\d+$/.test(str), {message: "Only   numbers allowed"}),
    password: z.string().min(6, "At least 6 characters needed").max(20, "Max 20 allowed")
})

export type GDSLoginData = z.infer<typeof GDSLoginSchema>