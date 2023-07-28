import styled from "styled-components";

export const CheckoutProductContainer=styled.div`
    display: flex;
    justify-content: space-between;
    margin: 3rem 0;

    .image-container{
        width: 19%;
    };

    .image{
        width: 100%;
    }
`;

export const TextContainer=styled.div`
    display: flex;
    width: 19%;
    align-items: center;
`;

export const TextContainerInner=styled.span`
    width: 100%;
    text-align: center;

    .quantity-adjust-arrow{
        font-size: 1.5rem;
        cursor: pointer;
    };

    .quantity{
        margin-left: 1rem;
        margin-right: 1rem;
    }
`;

export const RemoveButton=styled.span`
    font-size: 2rem;
    font-weight: bold;
    color: red;
    cursor: pointer;
`;
