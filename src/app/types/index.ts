export interface IProduct {
    brand: string | null
    id: string
    price: number
    product: string
}

export interface IProducts {
    result: IProduct[]
}