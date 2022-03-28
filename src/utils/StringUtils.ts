export const isString = (myVariable: unknown) => {
    return typeof myVariable === 'string' || myVariable instanceof String
}