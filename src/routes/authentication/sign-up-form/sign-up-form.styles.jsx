import styled from "styled-components";

export const AuthenticationFormContainer=styled.div`
    width: 40%;
    .authenticationFormSubheading{
        color: blue;
        font-size: 5rem;
    };
`;

export const AuthenticationForm=styled.form`
    display: flex;
    flex-direction: column;

    label{
        font-size: 1.1rem;
        font-weight: bold;
        margin-top: 1rem;
        margin-bottom: 1rem;
    };

    input{
        margin-bottom: 1rem;
        background-color: white;
        border: none;
        border-radius: 0.2rem;
        padding: 0.5rem 1rem;
        box-shadow: 0px 0px 12px gray;
    };
`;
