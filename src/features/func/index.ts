import { IProduct } from "../../app/types";

export const generateTimeToPass = () => {
    const timestamp =  new Date().toISOString().slice(0, 10).split('-').join('');
    return timestamp
}

export const prepareIds = (ids: string[]) => {
    return ids.map(item => {return `"${item}"`}).toString()
}

export const handleSearchProductBrand = (arr: IProduct[], value: string) => {
    const filterProducts = arr.filter((product) => {
        const filterBrand = product.brand?.includes(value)

        return filterBrand
    })
    return filterProducts
}

export const handleSearchProductName = (arr: IProduct[], value: string) => {
    const filterProducts = arr.filter((product) => {
        const filterName = product.product.includes(value)

        return filterName
    })
    return filterProducts
}

export const handleSearchProductPrice = (arr: IProduct[], value: string) => {
    const filterProducts = arr.filter((product) => {
        const filterPrice = String(product.price).includes(value)

        return filterPrice
    })
    return filterProducts
}