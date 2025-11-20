import * as z from 'zod';


export const signupSchema = z.object({
email: z.string().email(),
password: z.string().min(6),
firstName: z.string().min(1),
lastName: z.string().min(1),
phone: z.string().min(6),
});