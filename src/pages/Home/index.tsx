import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../features/hooks"
import { ProductsList } from "../../widgets/productsList"
import { fetchingProductsIds } from "../../app/store/slices/productsIdsSlice"
import { fetchingProducts } from "../../app/store/slices/productsSlice"
import { Modal } from "../../share/ui/Modal"

export const Home = () => {
    const { ids } = useAppSelector(state => state.productsIdsStore)
    const { isErrorProducts } = useAppSelector(state => state.productsStore)
    const fetchingDispatch = useAppDispatch()

    useEffect(() => {
        fetchingDispatch(fetchingProductsIds())
        if(ids) {            
            const filteredIds = new Set(ids)            
            fetchingDispatch(fetchingProducts(filteredIds))
        }

        if(ids.length === 0) {
            try {
                fetchingDispatch(fetchingProductsIds()) 
            } catch (e) {
                console.log(e)
            }
        }
    }, [fetchingDispatch])

    return (
        <section className="home">            
            {isErrorProducts ? <Modal errorText={isErrorProducts}/> : 
                <div className="container">
                    <div className="home__content">
                        <h1 className="home__title">Список тоаров</h1>
                        {<ProductsList/>}
                    </div>
                </div>
            }
        </section>
    )
}