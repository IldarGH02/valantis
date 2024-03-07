import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../features/hooks"
import { ProductsList } from "../../widgets/productsList"
import { fetchingProductsIds } from "../../app/store/slices/productsIdsSlice"
import { fetchingProducts } from "../../app/store/slices/productsSlice"

import { Spinner } from 'react-bootstrap'

export const Home = () => {
    const { ids } = useAppSelector(state => state.productsIdsStore)
    const { products } = useAppSelector(state => state.productsStore)
    const fetchingDispatch = useAppDispatch()

    useEffect(() => {
        fetchingDispatch(fetchingProductsIds()) 
        if(ids) {
            const filteredIds = ids.filter((item, pos) => ids.indexOf(item) === pos)
                .filter((item, pos) => ids.indexOf(item) === pos)
            
            setTimeout(() => {
                fetchingDispatch(fetchingProducts(filteredIds))
            }, 500)
        }
        if(ids.length === 0) {
            try {
                fetchingDispatch(fetchingProductsIds()) 
            } catch (e) {
                console.log(e)
            }
        }
    }, [])

    return (
        <section className="home">
            <div className="container">
                <div className="home__content">
                    <h1 className="home__title">Список тоаров</h1>
                    {<ProductsList items={products}/>}
                </div>
            </div>
        </section>
    )
}