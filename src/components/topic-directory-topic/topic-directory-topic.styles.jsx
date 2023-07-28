import { Link } from 'react-router-dom';

import styled from "styled-components";

export const TopicDirectoryTopicContainer=styled.div`
    width: 30%;
`;

export const TopicDirectoryTopicLink=styled(Link)`
    color: orange;
    text-decoration: none;

    h1, h2, h3, h4, h5, h6, p{
        cursor: pointer;
    }
`;

export const TopicImage=styled.img`
    cursor: pointer;
    width: auto;
    height: 18rem;
    margin-bottom: 2rem;
`;
