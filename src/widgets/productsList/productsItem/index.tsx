import { FC } from "react"
import { IProduct } from "../../../app/types"

interface IProductItem {
    product: IProduct
}

export const ProductsItem:FC<IProductItem> = ({product}) => {
    return (
        <li className="products__item">
            <div className="products__item-content">
                <p className="product__item-name product__item-info">
                    Название: {product.product}
                </p>
                <p className="product__item-brand product__item-info">
                    Бренд: {product.brand === null ? 'NoName' : product.brand}
                </p>
                <p className="product__item-price product__item-info">
                    Цена: {product.price}
                </p>
            </div>
        </li>
    )
}