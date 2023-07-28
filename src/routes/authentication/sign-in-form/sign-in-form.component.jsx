import { useState } from 'react';
import Button, { BUTTON_TYPE_CLASSES } from "../../../components/button/button.component.jsx";
import FormInput from "../../../components/form-input/form-input.component.jsx";
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from "../../../utils/firebase/firebase.utils";

import { AuthenticationFormContainer, AuthenticationForm } from "../authentication.styles.jsx";

const defaultFormFields={
    email:'',
    password:''
};

const SignInForm=()=>{
    const [formFields,setFormFields]=useState(defaultFormFields);
    const { email, password }=formFields;

    const resetFormFields=()=>{
        setFormFields(defaultFormFields);
        document.activeElement.blur();
    };

    const signInWithGoogle=async()=>{
        await signInWithGooglePopup();
    };

    const handleSubmit=async(event)=>{
        event.preventDefault();
        try{
            const response=await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        }catch(error){
            if(error.code==="auth/wrong-password"||error.code==="auth/user-not-found"){
                alert("Incorrect login details");
                return;
            }
            console.log("Error in SignInForm - ", error);
        };
    };

    const updateFormField=(event)=>{
        const { name, value }=event.target;
        setFormFields({ ...formFields, [name]:value });
    };

    return (
        <AuthenticationFormContainer>
            <h2>Already have an account?</h2>
            <span className="sign_up_form_subheading">Sign in with your email and password</span>
            <AuthenticationForm onSubmit={ handleSubmit }>
                <FormInput
                    label="Email Address"
                    type="email"
                    name="email"
                    onChange={ updateFormField }
                    value={ email }
                    required
                />
                <FormInput
                    label="Password"
                    type="password"
                    name="password"
                    onChange={ updateFormField }
                    value={ password }
                    required
                />
                <Button type="submit">Sign In</Button>
                <Button button_type={ BUTTON_TYPE_CLASSES.google } type="button" onClick={ signInWithGoogle }>Sign in with Google</Button>
                <Button button_type={ BUTTON_TYPE_CLASSES.form_reset } type="button" onClick={ resetFormFields }>Reset</Button>
            </AuthenticationForm>
        </AuthenticationFormContainer>
    );
};

export default SignInForm;
