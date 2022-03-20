export interface CreateAuthorRepository {
    createAuthor: (name : string, lastName: string) => Promise<boolean>
}

