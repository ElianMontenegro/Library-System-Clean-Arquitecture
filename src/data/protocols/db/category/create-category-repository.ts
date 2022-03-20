
export interface CreateCategoryRepository {
    createCategory: (name : string) => Promise<boolean>
}

