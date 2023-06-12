import { useState, useContext } from 'react';
import Button from "../button/button.component.jsx";
import FormInput from "../form-input/form-input.component.jsx";
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import { UserContext } from "../../contexts/user.context.jsx";

const defaultFormFields={
    email:'',
    password:''
};

const SignInForm=()=>{
    const [formFields,setFormFields]=useState(defaultFormFields);
    const { email, password }=formFields;

    const { setCurrentUser }=useContext(UserContext);

    const resetFormFields=()=>{
        setFormFields(defaultFormFields);
    };

    const signInWithGoogle=async()=>{
        const response=await signInWithGooglePopup();
        await createUserDocumentFromAuth(response.user);
    };

    const handleSubmit=async(event)=>{
        event.preventDefault();
        try{
            const response=await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
            setCurrentUser(response.user);
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
        <div className="sign_up_container">
            <h2>Already have an account?</h2>
            <span className="sign_up_form_subheading">Sign in with your email and password</span>
            <form className="sign_up_form" onSubmit={ handleSubmit }>
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
                <Button button_type="signUpFormSubmit" type="submit">Sign In</Button>
                <Button button_type="google" type="button" onClick={ signInWithGoogle }>Sign in with Google</Button>
                <Button button_type="signUpFormReset" type="button" onClick={ resetFormFields }>Reset</Button>
            </form>
        </div>
    );
};

export default SignInForm;
