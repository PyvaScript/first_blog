import styled from 'styled-components';

import Button from "../button/button.component.jsx";

export const ProductCardContainer=styled.div`
    width: 100%;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    &:hover{
        img{
            opacity: 0.8;
        }

        button{
            opacity: 0.85;
            display: flex;
        }
    }
`;

export const ProductCardImage=styled.img`
    width: 20vw;
    height: auto;
    object-fit: cover;
    margin-bottom: 5px;
    overflow: hidden;
`;

export const ProductCardButton=styled(Button)`
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
`;

export const ProductCardFooter=styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    padding: 0 2rem;

    .name{
        width: 90%;
        margin-bottom: 15px;
        z-index: 7;
        text-align: left;
    };

    .price{
        width: 10%;
    };
`;
