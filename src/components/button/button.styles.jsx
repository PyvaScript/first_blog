import styled from 'styled-components';

export const BaseButton=styled.button`
    color: white;
    background-color: black;
    width: 100%;
    font-weight: bold;
    font-size: 1.2rem;
    border: none;
    border-radius: 0.25rem;
    margin: 2rem auto 0 auto;
    padding: 0.5rem 1rem;

    &:hover {
        color: orange;
        border: 2px solid orange;
    };
`

export const GoogleSignInButton=styled(BaseButton)`
    color: white;
    background-color: #0077E3;

    &:hover {
        color: black;
    }
`

export const FormResetButton=styled(BaseButton)`
    color: red;
    background-color: #F0F0F0;

    &:hover{
        color: red;
        border: none;
    }
`
