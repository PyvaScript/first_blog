import { BaseButton, GoogleSignInButton, FormResetButton, ButtonSpinner } from "./button.styles.jsx";

export const BUTTON_TYPE_CLASSES={
    base:'base',
    google:'google',
    form_reset:'form_reset',
};

const getButton=(buttonType=BUTTON_TYPE_CLASSES.base)=>(
    {
        [ BUTTON_TYPE_CLASSES.base ]: BaseButton,
        [ BUTTON_TYPE_CLASSES.google ]: GoogleSignInButton,
        [ BUTTON_TYPE_CLASSES.form_reset ]: FormResetButton,
    }[ buttonType ]
);

const Button=({ children, button_type, isLoading, ...otherProps })=>{
    const CustomButton=getButton(button_type);
    return <CustomButton disabled = { isLoading } { ...otherProps }>{ isLoading ? <ButtonSpinner /> : children }</CustomButton>;
};

export default Button







/*
import "./button.styles.scss";

const BUTTON_TYPE_CLASSES={
    google:'google-sign-in',
    inverted:'inverted',
    signUpFormSubmit:'sign_up_form_submit',
    signUpFormReset:'sign_up_form_reset'
}

const Button=({ children, button_type, ...otherProps })=>{
    return (
        <button 
            className={ `button_container ${ BUTTON_TYPE_CLASSES[button_type] }` }
            { ...otherProps }
        >
            { children }
        </button>
    );
};

export default Button;
*/