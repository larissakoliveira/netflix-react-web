import { Grid } from '@mui/material';
import styled from 'styled-components';

export const DetailsContainer = styled(Grid)`
    color: #fff;
    flex-direction: column;

    img {
        width: 100%;
    }

    button {
        background-color: ${(props) => props.theme.palette.core.primary};
        color: #fff;
        border-radius: 3px;
        padding: 3px;
    }
`;
