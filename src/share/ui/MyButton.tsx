import { FC } from "react"

interface IMyButton {
    className: string
    handleClick: React.MouseEventHandler<HTMLButtonElement>
    text: string
}

export const MyButton: FC<IMyButton> = ({className, handleClick, text}) => {
    return (
        <button 
            className={className} 
            onClick={handleClick}
        >
            {text}
        </button>
    )
}