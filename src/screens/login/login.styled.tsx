import { Grid } from "@mui/material";
import styled from "styled-components";

export const Wrapper = styled(Grid)`
    min-height: 100vh;
    background-color: #1A1A1A;
`

export const Input = styled.input`
    width: 100%;
    padding: 8px;
    margin: 0 0 22px;
    border-radius: 5px;
    border: 1px solid #E0E0E0;
    box-sizing: border-box;

    :focus {
        outline: none;
    }
`

export const Button = styled.button`
    color: #FFF;
    width: 100%;
    padding: 9px;
    margin: 0 0 22px;
    border-radius: 5px;
    background-color: #E31A13;
    border: 0;
    cursor: pointer;
    font-weight: 800;

    :hover {
        opacity: 0.9    ;
    }
    :active {
        position: relative;
        top: 1px;
        left: 1px;
    } 
`

export const Error = styled.p`
    color: #E31A13;
    font-weight: 800;
    text-align: center;
`