import styled from "styled-components";
import { Link } from 'react-router-dom';

export const CategoryPreviewContainer=styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`;

export const Title=styled(Link)`
    font-size: 28px;
    font-weight: bold;
    margin-top: 2rem;
    margin-bottom: 2rem;
    cursor: pointer;
    color: orange;
    background-color: white;
    border: none;
    border-radius: 0.25rem;
    text-decoration: none;
`;

export const Preview=styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
`;
