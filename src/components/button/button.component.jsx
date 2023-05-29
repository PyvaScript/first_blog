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
