import { FC } from "react"
import { IProduct } from "../../app/types"
import { ProductsItem } from "./productsItem"
import { useAppSelector } from "../../features/hooks"
import { Filter } from "../filter"

interface IProductsList {
    items: IProduct[]
}

export const ProductsList: FC<IProductsList> = ({items}) => {
    const { products } = useAppSelector(state => state.productsStore)

    if(products.length === 0) {
        return <div>Упс, запрос ушёл, а данные потерялись...</div>
    }

    return (
        <>
            <Filter/>
            <ul className="products__list">
                {items ? items.map((product: IProduct) => {
                    return <ProductsItem product={product} key={product.id}/>
                }) : null}
            </ul>
        </>
    )
}