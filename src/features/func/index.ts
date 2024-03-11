import { IProduct } from "../../app/types";

export const generateTimeToPass = () => {
    const timestamp =  new Date().toISOString().slice(0, 10).split('-').join('');
    return timestamp
}

export const prepareIds = (ids: string[]) => {
    return ids.map(item => {return `"${item}"`}).toString()
}

export const handleSearchProductBrand = (arr: IProduct[], value: string) => {
    if(value) {
        return arr.filter((product) => { return product.brand?.toLowerCase().includes(value) })
    } else {
        return arr
    }    
}

export const handleSearchProductName = (arr: IProduct[], value: string) => {
    if(value) {
        return arr.filter((product) => { return product.product.toLowerCase().includes(value) })
    } else {
        return arr
    }    
}

export const handleSearchProductPrice = (arr: IProduct[], value: string) => {
    if(value) {
        return arr.filter((product) => { return product.price === +value })
    } else {
        return arr
    }
}