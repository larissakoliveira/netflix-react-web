import { Grid } from '@mui/material';
import styled from 'styled-components';

export const Wrapper = styled(Grid)`
    min-height: 100vh;
    background-color: ${(props) => props.theme.palette.core.secondary};

    h4 {
        color: #fff;
        text-align: center;
    }
`;

export const ImageContainer = styled.img`
    max-width: 100%;
    display: block;
    margin: auto auto 8rem;
`;
