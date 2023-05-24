import "./sign-up-form.styles.scss";
import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

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
    }

    const handleSubmit=async(event)=>{
        event.preventDefault();
        if(password!==confirmPassword){
            alert('Passwords do not match.');
            return;
        };
        try{
            const { user }=await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
        }catch(error){
            if(error.code==="auth/email-already-in-use"){
                alert("The email provided is already in use");
            }else{
                console.error("User creation encountered an error - ",error);
            }
        };
    };

    /*
    const handleSubmit=async(event)=>{
        event.preventDefault();
        if(password!==confirmPassword){
        return;
        const newUserAuth=createAuthUserWithEmailAndPassword(email, password);
        console.log("newUserAuth - ",newUserAuth);
        createUserDocumentFromAuth(newUserAuth);   
    }
    */
    
    const updateField=(event)=>{
        const { name, value }=event.target;
        setFormFields({ ...formFields, [name]:value })
    };

    return (
        <div>
            <h1 className="sign_up_form_heading">Sign up with your email and password</h1>
            <form className="sign_up_form" onSubmit={ handleSubmit }>
                <label>Display Name</label>
                <input type="text" onChange={updateField} name="displayName" value={ displayName } required></input>
                <label>Email</label>
                <input type="email" onChange={updateField} name="email" value={ email } required></input>
                <label>Password</label>
                <input type="password" onChange={updateField} name="password" value={ password } minLength="6" required></input>
                <label>Confirm Password</label>
                <input type="password" onChange={updateField} name="confirmPassword" value={ confirmPassword } minLength="6" required></input>
                <input className="sign_up_form_submit" type="submit" value="Sign up"></input>
            </form>
        </div>
    );
};

export default SignUpForm;
