import { Button } from "components/comps/button";
import { FormInput } from "components/comps/formInput";
import { FormSection } from "components/comps/formSection";
import { HelperText, TitleText } from "components/comps/text";
import { useRouter } from "next/router";
import { useState } from "react";


export function LoginForm(){

    const [rollNo, setRollNo] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const router = useRouter();

    function handleSubmit(){
        localStorage.setItem("rollNo", rollNo);
    }

    return (
        <FormSection>
            <TitleText>Login Form</TitleText>
            <FormInput
                id="name"
                label="Roll Number"
                type="text"
                value={rollNo}
                onChange={(e) => setRollNo(e.target.value)}
            />
            <FormInput
                id="name"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button
                onClick={handleSubmit}
            > Login </Button>
            {/* <HelperText>Already a User ?</HelperText> */}
        </FormSection>
    )
}