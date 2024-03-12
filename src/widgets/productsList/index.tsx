import React, { useEffect, useState } from "react"
import { IProduct } from "../../app/types"
import { ProductsItem } from "./productsItem"
import { useAppDispatch, useAppSelector } from "../../features/hooks"
import { Filter } from "../filter"
import { productsSearchBrand, productsSearchName, productsSearchPrice } from "../../app/store/slices/productsSlice"
import { handleSearchProductBrand, handleSearchProductName, handleSearchProductPrice } from "../../features/func"


export const ProductsList = () => {
    const [valueBrand, setValueBrand] = useState<string>('')
    const [valueName, setValueName] = useState<string>('')
    const [valuePrice, setValuePrice] = useState<string>('')
    const dispatch = useAppDispatch()

    const productsList = useAppSelector(state => {
        const { 
            products, 
            searchBrand, 
            searchName, 
            searchPrice } = state.productsStore

        const ids = products.map(({id}) => id)
        const filtered = products.filter(({id}, index) => !ids.includes(id, index + 1))
        
        return (
            handleSearchProductBrand(filtered, searchBrand) ||
            handleSearchProductName(filtered, searchName) ||
            handleSearchProductPrice(filtered, searchPrice) 
        )        
    })  

    const handleChangeBrand = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setValueBrand(value)
        dispatch(productsSearchBrand(value))
    }

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setValueName(value)
        dispatch(productsSearchName(value))
    }

    const handleChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setValuePrice(value)
        dispatch(productsSearchPrice(value))
    }

    return (
        <>
            <Filter
                handleChangeBrand={handleChangeBrand}
                handleChangeName={handleChangeName}
                handleChangePrice={handleChangePrice}
                valueBrand={valueBrand}
                valueName={valueName}
                valuePrice={valuePrice}
            />
            <ul className="products__list">
                {productsList ? productsList.map((product: IProduct) => {
                    return <ProductsItem product={product} key={product.id}/>
                }) : <></>
                }
            </ul>
        </>
    )
}