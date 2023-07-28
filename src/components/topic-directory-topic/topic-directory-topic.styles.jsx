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

    img{
        cursor: pointer;
    }
`;
