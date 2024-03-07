import React, { FC } from "react"

interface IMyInput {
    className: string
    placeholder: string
    handleChange: React.ChangeEventHandler<HTMLInputElement>
    value: string
}

export const MyInput: FC<IMyInput> = ({
    className, 
    placeholder, 
    handleChange, 
    value
}) => {
    return (
        <input 
            className={className} 
            placeholder={placeholder} 
            onChange={handleChange} 
            value={value}
        />
    )
}