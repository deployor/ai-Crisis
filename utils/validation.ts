import * as z from 'zod';

export const messageSchema = z.object({
    content: z.string().min(1).max(1000),
});