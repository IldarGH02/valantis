import { MyInput } from "../../share/ui/MyInput"

export const Filter = () => {
    return (
        <div className="filter">
            <div className="filter__group">
                <MyInput
                    className="filter__input filter-brand"
                    value=""
                    handleChange={() => { } } 
                    placeholder="Введите название бренда"                    
                />
                <MyInput
                    className="filter__input filter-price"
                    value=""
                    handleChange={() => { } } 
                    placeholder="Введите название товара"  
                />
                <MyInput
                    className="filter__input filter__brand"
                    value=""
                    handleChange={() => { } } 
                    placeholder="Введите цену"  
                />
            </div>
        </div>
    )
}