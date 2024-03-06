import { FC } from "react"
import { IProduct } from "../../../app/types"

interface IProductItem {
    product: IProduct
}

export const ProductsItem:FC<IProductItem> = ({product}) => {
    return (
        <li className="products__item">
            <div className="products__item-content">
                <p className="product__item-brand">
                    Название: {product.product}
                    Бренд: {product.brand}
                    Цена: {product.price}
                </p>
            </div>
        </li>
    )
}