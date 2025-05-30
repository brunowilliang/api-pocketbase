import { z } from 'zod'

const DATETIME_REGEX = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}(\.\d+)?Z$/

export const usersSchema = z.object({
    id: z.string().regex(/^[a-z0-9]+$/).length(15).optional(),
    password: z.string().min(8),
    tokenKey: z.string().min(30).max(60).optional(),
    email: z.string().email(),
    emailVisibility: z.boolean().optional(),
    verified: z.boolean().optional(),
    name: z.string().max(255).optional(),
    surname: z.string().optional(),
    avatar: z.string().optional(),
    rule: z.enum(["test 1", "test 2", "test 3"]).optional(),
    newRule: z.string().optional(),
    options: z.enum(["option 1", "option 2", "option 3"]).optional(),
    created: z.string().regex(DATETIME_REGEX).optional(),
    updated: z.string().regex(DATETIME_REGEX).optional(),
})

