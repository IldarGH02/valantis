import React, { useState } from "react"
import { IProduct } from "../../app/types"
import { ProductsItem } from "./productsItem"
import { useAppDispatch, useAppSelector } from "../../features/hooks"
import { Filter } from "../filter"
import { fetchingProducts, productsSearchBrand, productsSearchName, productsSearchPrice } from "../../app/store/slices/productsSlice"
import { MyButton } from "../../share/ui/MyButton"
import { handleSearchProductBrand, handleSearchProductName, handleSearchProductPrice } from "../../features/func"


export const ProductsList = () => {
    const [valueBrand, setValueBrand] = useState<string>('')
    const [valueName, setValueName] = useState<string>('')
    const [valuePrice, setValuePrice] = useState<string>('')

    const productsList = useAppSelector(state => {
        const { products, searchBrand, searchName, searchPrice } = state.productsStore
        if(searchBrand) { 
           return handleSearchProductBrand(products, searchBrand)
        }

        if (searchName) {
            return handleSearchProductName(products, searchName)
        } 

        if(searchPrice) {
            return handleSearchProductPrice(products, searchPrice)
        } 

        return products
        
    })

    const { ids } = useAppSelector(state => state.productsIdsStore)
    const dispatch = useAppDispatch()

    const fetchProducts = () => {
        const filteredIds = ids.filter((item, pos) => ids.indexOf(item) === pos)
                .filter((item, pos) => ids.indexOf(item) === pos)

        dispatch(fetchingProducts(filteredIds))
    }

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


{/* <div>
                        <p>Данные почему-то не пришли...</p>
                        <MyButton
                            className="products__lest-reload"
                            handleClick={fetchProducts}
                            text="Повторить запрос"
                        />
                    </div> */}