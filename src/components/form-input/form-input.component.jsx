import { SignUpFormInputGroup, FormInputField } from './form-input.styles.jsx';

const FormInput=({ label, ...otherProps })=>{
    return (
        <SignUpFormInputGroup>
            {
                label && (
                    <label className={ `form_input_label ${ otherProps.value.length ? 'shrink' : '' }` }>{ label }</label>
                )
            }
            <FormInputField { ...otherProps }/>
        </SignUpFormInputGroup>
    );
};

export default FormInput;

/*
import "./form-input.styles.scss";
const FormInput=({ label, ...otherProps})=>{
    return (
        <div className="sign_up_form_input_group">
            { label && (
                <label className={ `form_input_label ${ otherProps.value.length ? 'shrink' : '' }` }>{ label }</label>
            )}
            <input className="form_input" { ...otherProps }/>
        </div>
    );
};

export default FormInput;
*/
