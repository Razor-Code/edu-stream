import { MouseEventHandler, PropsWithChildren } from 'react'

interface ButtonProps{
    onClick?: MouseEventHandler<HTMLButtonElement>
}
export function Button(props: PropsWithChildren<ButtonProps>){
    return (
        <button onClick={props.onClick} className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">{props.children}</button>
    )
}