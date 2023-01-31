import { PropsWithChildren } from "react";

interface TitleProps {
}
export function TitleText(props: PropsWithChildren<TitleProps>){
    return (
        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">{props.children}</h2>
    )
}

interface TextProps{
}
export function Text(props: PropsWithChildren<TextProps>){
    return (
        <p className="leading-relaxed mb-5 text-gray-600">{props.children}</p>
    )
}

interface HelperTextProps {
}
export function HelperText(props: PropsWithChildren<HelperTextProps>){
    return (
        <p className="text-xs text-gray-500 mt-3">{props.children}</p>
    )
}