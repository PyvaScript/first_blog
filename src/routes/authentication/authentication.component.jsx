import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import { auth, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import SignUpForm from "../../components/sign-up-form/sign-up-form.component.jsx";
import SignInForm from "../../components/sign-in-form/sign-in-form.component.jsx";
import "./authentication.styles.scss";

const Authentication=()=>{
    useEffect(()=>{
        async function first_sign_in_call(){
            console.log("This is working");
            const response=await getRedirectResult(auth);
            console.log("first_sign_in_call response - ",response);
            const userDocRef=await createUserDocumentFromAuth(response.user);
        }
        first_sign_in_call()
    },[]);
    return (
        <div>
            <div className="sign_in_options">
                <div className="formOptions">
                    <SignInForm/>
                    <SignUpForm/>
                </div>
            </div>
        </div>
    )
};

export default Authentication;
