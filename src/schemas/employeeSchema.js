import { z } from "zod";

export const employeeSchema = z.object({
    employeeName: z.string().min(1),
    email: z.string().email(),
    department: z.string().min(1),
    gender: z.string().min(1)
})