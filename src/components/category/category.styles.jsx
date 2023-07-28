import styled from "styled-components";

export const CategoryTitle=styled.h2`
    text-align: center;
    font-size: 2rem;
    padding-bottom: 2rem;
`;

export const CategoryContainer=styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 50px;
`;
