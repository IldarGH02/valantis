export interface IProduct {
    brand: string | null
    id: string
    price: number | null
    product: string | null
}

export interface IProducts {
    result: IProduct[]
}