import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import { auth, signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import SignUpForm from "../../components/sign-up-form/sign-up-form.component.jsx";
import "./sign-in.styles.scss";

const SignIn=()=>{
    useEffect(()=>{
        async function first_sign_in_call(){
            console.log("This is working");
            const response=await getRedirectResult(auth);
            console.log(response);
            const userDocRef=await createUserDocumentFromAuth(response.user);
        }
        first_sign_in_call()
    },[]);
    const logGoogleUser=async()=>{
        const response=await signInWithGooglePopup();
        const userDocRef=await createUserDocumentFromAuth(response.user);
    };
    return (
        <div>
            <div className="sign_in_options">
                <div className="google_options">
                    <input type="button" onClick={ logGoogleUser } value="Sign in with Google Popup"/>
                    <input type="button" onClick={ signInWithGoogleRedirect } value="Sign in with Google Redirect"/>
                </div>
                <SignUpForm/>
            </div>
        </div>
    )
};

export default SignIn;
