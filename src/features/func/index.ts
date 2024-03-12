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
        return arr.map((product) => {return product.product})
            .filter((item) => item?.toLocaleLowerCase().includes(value)).flat()        
    } else {
        return arr
    }    
}

export const handleSearchProductPrice = (arr: IProduct[], value: string) => {
    if(value) {        
        return arr.map((product) => {return product.price}).filter((price) => price?.toString().includes(value)).flat()
    } else {
        return arr
    }
}