import { z } from "zod"

const schema = z.object({
    name: z.string(),
    description: z.string().optional(),
    price: z.number().min(0),
    stock: z.number().min(0),
    category: z.number().optional(),
    executive: z.string().optional()
})

export default schema