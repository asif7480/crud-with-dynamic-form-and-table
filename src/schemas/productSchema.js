import { z } from "zod";

export const productSchema = z.object({
    productName: z.string().min(1),
    price: z.coerce.number().min(1)
})