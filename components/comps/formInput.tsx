import { ChangeEventHandler, HTMLInputTypeAttribute } from "react"

interface FormInputProps {
    label?: string,
    id?: string,
    type?: HTMLInputTypeAttribute,
    value?: string | number | readonly string[],
    onChange?: ChangeEventHandler<HTMLInputElement>
}

export function FormInput({ label, id, type, value, onChange }: FormInputProps) {
    return (
        <div className="relative mb-4">
            <label htmlFor={id} className="leading-7 text-sm text-gray-600">{label}</label>
            <input type={type} id={id} value={value} onChange={onChange} className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
    )
}