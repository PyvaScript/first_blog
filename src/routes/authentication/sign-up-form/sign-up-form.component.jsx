import { useState } from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../../../components/button/button.component.jsx";
import FormInput from "../../../components/form-input/form-input.component.jsx";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../../utils/firebase/firebase.utils";


import "./sign-up-form.styles.scss";

import { AuthenticationFormContainer, AuthenticationForm } from "../authentication.styles.jsx";

const defaultFormFields={
    displayName:"",
    email:"",
    password:"",
    confirmPassword:"",
}

const SignUpForm=()=>{
    const [formFields,setFormFields]=useState(defaultFormFields);
    const { displayName, email, password, confirmPassword }=formFields;

    const resetFormFields=()=>{
        setFormFields(defaultFormFields);
        document.activeElement.blur();
    }

    const handleSubmit=async(event)=>{
        event.preventDefault();
        if(password!==confirmPassword){
            alert("Passwords do not match.");
            return;
        };
        try{
            const { user }=await createAuthUserWithEmailAndPassword(email,password);
            await createUserDocumentFromAuth(user,{ displayName });
            resetFormFields();
        }catch(error){
            if(error.code==="auth/email-already-in-use"){
                alert("The email provided is already associated with an account");
            }else{
                console.error("User creation encountered an error - ",error);
            }
        };
    };

    const updateField=(event)=>{
        const { name, value }=event.target;
        setFormFields({ ...formFields, [name]:value })
    };

    return (
        <AuthenticationFormContainer>
            <h2>Don't have an account?</h2>
            <span className="sign_up_form_subheading">Sign up with your email and password</span>
            <AuthenticationForm onSubmit={ handleSubmit }>
                <FormInput 
                    label="Display Name"
                    type="text"
                    name="displayName"
                    onChange={ updateField }
                    value={ displayName }
                    required
                />
                <FormInput
                    label="Email address"
                    type="email"
                    name="email"
                    onChange={ updateField }
                    value={ email }
                    required
                />
                <FormInput
                    label="Password"
                    type="password"
                    name="password"
                    minLength="6"
                    onChange={ updateField }
                    value={ password }
                    required
                />
                <FormInput
                    label="Confirm Password"
                    type="password"
                    name="confirmPassword"
                    minLength="6"
                    onChange={ updateField }
                    value={ confirmPassword }
                    required
                />
                <Button type="submit">Sign Up</Button>
                <Button button_type={ BUTTON_TYPE_CLASSES.form_reset } type="button" onClick={ resetFormFields }>Reset</Button>
            </AuthenticationForm>
        </AuthenticationFormContainer>
    );
};

export default SignUpForm;
