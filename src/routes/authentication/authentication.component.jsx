import { useEffect } from 'react';
import { getRedirectResult } from "firebase/auth";
import { auth, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import SignInForm from "./sign-in-form/sign-in-form.component.jsx";
import SignUpForm from "./sign-up-form/sign-up-form.component.jsx";

import { SignInOptions, FormOptions } from "./authentication.styles.jsx";

const Authentication=()=>{
    useEffect(()=>{
        async function first_sign_in_call(){
            const response=await getRedirectResult(auth);
            const userDocRef=await createUserDocumentFromAuth(response.user);
        }
        first_sign_in_call();
    },[]);

    return (
        <div>
            <SignInOptions>
                <FormOptions>
                    <SignInForm/>
                    <SignUpForm/>
                </FormOptions>
            </SignInOptions>
        </div>
    )
};

export default Authentication;



/*
import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import { auth, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import SignUpForm from "./sign-up-form/sign-up-form.component.jsx";
import SignInForm from "./sign-in-form/sign-in-form.component.jsx";
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
            <SignInOptions>
                <FormOptions>
                    <SignInForm/>
                    <SignUpForm/>
                </FormOptions>
            </SignInOptions>
        </div>
    )
};

export default Authentication;
*/
