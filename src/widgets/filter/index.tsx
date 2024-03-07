import React, { FC } from "react"
import { MyInput } from "../../share/ui/MyInput"

interface IFilter {
    handleChangeBrand: React.ChangeEventHandler<HTMLInputElement> 
    handleChangePrice: React.ChangeEventHandler<HTMLInputElement> 
    handleChangeName: React.ChangeEventHandler<HTMLInputElement> 
    valueBrand: string 
    valuePrice: string 
    valueName: string
}

export const Filter: FC<IFilter> = (
    {
        handleChangeBrand, 
        handleChangePrice, 
        handleChangeName, 
        valueBrand, 
        valuePrice, 
        valueName
    }) => {
    return (
        <div className="filter">
            <div className="filter__group">
                <MyInput
                    className="filter__input filter-brand"
                    value={valueBrand}
                    handleChange={handleChangeBrand} 
                    placeholder="Введите название бренда"                    
                />
                <MyInput
                    className="filter__input filter-name"
                    value={valueName}
                    handleChange={handleChangeName} 
                    placeholder="Введите название товара"  
                />
                <MyInput
                    className="filter__input filter__price"
                    value={valuePrice}
                    handleChange={handleChangePrice} 
                    placeholder="Введите цену"  
                />
            </div>
        </div>
    )
}