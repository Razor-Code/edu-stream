import { PropsWithChildren } from "react";


interface FormSectionProps {
}
export function FormSection(props: PropsWithChildren<FormSectionProps>){
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-20 mx-auto flex flex-wrap items-center">
                <div className="lg:w-2/6 md:w-1/2 rounded-lg p-8 flex flex-col mx-auto w-full mt-10 md:mt-0">
                    {props.children}
                </div>
            </div>
        </section>
    )
}