import { PrismaClient } from "../../generated/prisma/client.js"
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv"
dotenv.config()

const database_url = process.env.DATABASE_URL!

const adapter = new PrismaPg({connectionString: database_url})
const prisma = new PrismaClient({adapter})
export default prisma