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

/*
import { useState } from "react";

function Input({ label, id, type, value, onChange }) {
    return (
        <div className="relative mb-4">
            <label htmlFor={id} className="leading-7 text-sm text-gray-600">{label}</label>
            <input type={type} id={id} value={value} onChange={onChange} className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
    )
}

export default function CreateUserType() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [maxBooks, setMaxBooks] = useState("");
    const [maxDays, setMaxDays] = useState("");
    const [maxRenewals, setMaxRenewals] = useState("");
    const [maxRenewalDays, setMaxRenewalDays] = useState("");
    const [finePerDay, setFinePerDay] = useState("");
    const [subscriptionFee, setSubscriptionFee] = useState("");
    const [subscriptionPeriod, setSubscriptionPeriod] = useState("");

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-20 mx-auto flex flex-wrap items-center">
                <div className="lg:w-2/6 md:w-1/2 rounded-lg p-8 flex flex-col mx-auto w-full mt-10 md:mt-0">
                    <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Create a user type</h2>
                    <Input
                        label="Name"
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                        label="Description"
                        id="description"
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <Input
                        label="Max Books"
                        id="maxBooks"
                        type="number"
                        value={maxBooks}
                        onChange={(e) => setMaxBooks(e.target.value)}
                    />
                    <Input
                        label="Max Days"
                        id="maxDays"
                        type="number"
                        value={maxDays}
                        onChange={(e) => setMaxDays(e.target.value)}
                    />
                    <Input
                        label="Max Renewals"
                        id="maxRenewals"
                        type="number"
                        value={maxRenewals}
                        onChange={(e) => setMaxRenewals(e.target.value)}
                    />
                    <Input
                        label="Max Renewal Days"
                        id="maxRenewalDays"
                        type="number"
                        value={maxRenewalDays}
                        onChange={(e) => setMaxRenewalDays(e.target.value)}
                    />
                    <Input
                        label="Fine Per Day"
                        id="finePerDay"
                        type="number"
                        value={finePerDay}
                        onChange={(e) => setFinePerDay(e.target.value)}
                    />
                    <Input
                        label="Subscription Fee"
                        id="subscriptionFee"
                        type="number"
                        value={subscriptionFee}
                        onChange={(e) => setSubscriptionFee(e.target.value)}
                    />
                    <Input
                        label="Subscription Period"
                        id="subscriptionPeriod"
                        type="number"
                        value={subscriptionPeriod}
                        onChange={(e) => setSubscriptionPeriod(e.target.value)}
                    />

                    <button className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Create Category</button>
                    <p className="text-xs text-gray-500 mt-3">This will create a user type</p>
                </div>
            </div>
        </section>

    )
}
*/