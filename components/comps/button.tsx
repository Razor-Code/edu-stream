import { PropsWithChildren } from 'react'

interface ButtonProps{
}
export function Button(props: PropsWithChildren<ButtonProps>){
    return (
        <button className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">{props.children}</button>
    )
}