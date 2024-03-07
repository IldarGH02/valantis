import { FC } from "react"
import { MyButton } from "./MyButton"
import { useAppDispatch, useAppSelector } from "../../features/hooks"
import { fetchingProducts } from "../../app/store/slices/productsSlice"

interface IModal {
    errorText: string | null | undefined
}

export const Modal: FC<IModal> = ({errorText}) => {
    const { ids } = useAppSelector(state => state.productsIdsStore)
    const dispatch = useAppDispatch()

    const fetchProducts = () => {
        const filteredIds = ids.filter((item, pos) => ids.indexOf(item) === pos)
                .filter((item, pos) => ids.indexOf(item) === pos)

        dispatch(fetchingProducts(filteredIds))
    }

    return (
        <div className="modal-error">
            <div className="modal__content">
                <p className="modal__text-error">
                    {errorText}
                </p>
                <MyButton
                    className="modal__button-fetch"
                    text="Повторить запрос"
                    handleClick={fetchProducts}
                />
            </div>
        </div>
    )
}