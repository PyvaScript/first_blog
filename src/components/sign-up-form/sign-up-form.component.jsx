import "./sign-up-form.styles.scss";
import { useState } from 'react';

const defaultFormFields={
    displayName:"",
    email:"",
    password:"",
    confirmPassword:"",
}

const SignUpForm=()=>{
    const [formFields,setFormFields]=useState(defaultFormFields);
    const { displayName, email, password, confirmPassword }=formFields;
    const updateField=()=>{};
    /*
    const updateField=(event)=>{
        const { name, value }=event.target;
        setFormFields({ ...formFields, [name]:value })
    };
    */

    return (
        <div>
            <h1 className="sign_up_form_heading">Sign up with your email and password</h1>
            <form className="sign_up_form" onSubmit={()=>{}}>
                <label>Display Name</label>
                <input type="text" onChange={updateField} name="displayName" required></input>
                <label>Email</label>
                <input type="email" onChange={updateField} name="email" required></input>
                <label>Password</label>
                <input type="password" onChange={updateField} name="password" required></input>
                <label>Confirm Password</label>
                <input type="password" onChange={updateField} name="confirmPassword" required></input>
                <input className="sign_up_form_submit" type="submit" value="Sign up"></input>
            </form>
        </div>
    );
};

export default SignUpForm;
