export interface Users {
    id: string
    password: string
    tokenKey: string
    email: string
    emailVisibility: boolean
    verified: boolean
    name: string
    surname: string
    avatar: string
    rule: 'test 1' | 'test 2' | 'test 3'
    newRule: string
    options: 'option 1' | 'option 2' | 'option 3'
    created: string
    updated: string
}


/**
 * Commented-out back-relations are what will be inferred by pocketbase-ts from the forward relations.
 *
 * The "UNIQUE index constraint" case is automatically handled by this hook,
 * but if you want to make a back-relation non-nullable, you can uncomment it and remove the "?".
 *
 * See [here](https://github.com/satohshi/pocketbase-ts#back-relations) for more information.
 */
export type Schema = {
    users: {
        type: Users
    }
}

