import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../features/hooks"
import { ProductsList } from "../../widgets/productsList"
import { fetchingProductsIds, fetchingProducts } from "../../app/store/slices/productsSlice"

import { Spinner } from 'react-bootstrap'

export const Home = () => {
    const { products, ids, isLoading } = useAppSelector(state => state.productsStore)
    const fetchingDispatch = useAppDispatch()

    useEffect(() => {
        fetchingDispatch(fetchingProductsIds())        
    }, [])

    useEffect(() => {
        console.log(ids)
        if(ids.length > 0) {
            fetchingDispatch(fetchingProducts(ids))
        }
    }, [])

    return (
        <section className="home">
            <div className="container">
                <div className="home__content">
                    <h1 className="home__title">Список тоаров</h1>
                    {!isLoading ? <ProductsList items={products}/> : <Spinner animation="border" variant="danger"/>}
                </div>
            </div>
        </section>
    )
}