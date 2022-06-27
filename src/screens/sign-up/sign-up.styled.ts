import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled(Grid)`
    // @media (max-width: 600px) {
    //     min-width: 60%;
    // }
    min-height: 100vh;
    background-color: ${(props) => props.theme.palette.core.secondary};

    p {
        color: #fff;
        text-align: center;
    }
`;

export const StyledLink = styled(Link)`
    color: #E31A13;
    text-decoration: none;
    font-weight: 800;
`;

export const ImageContainer = styled.img`
    max-width: 100%;
    display: block;
    margin: auto auto 8rem;
`;
