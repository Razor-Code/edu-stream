import { Button } from "components/comps/button";
import { FormInput } from "components/comps/formInput";
import { FormSection } from "components/comps/formSection";
import { HelperText, TitleText } from "components/comps/text";


export function DemoForm(){
    return (
        <FormSection>
            <TitleText>Demo Form</TitleText>
            <FormInput
                id="name"
                label="Username"
                type="text"
            />
            <FormInput
                id="name"
                label="Password"
                type="password"
            />
            <Button> Create yourself </Button>
            <HelperText>Already a User ?</HelperText>
        </FormSection>
    )
}