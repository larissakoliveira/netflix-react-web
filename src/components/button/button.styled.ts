import styled from "styled-components";

export const Button = styled.button`
color: ${props => props.theme.palette.typography.primary};
width: 100%;
padding: 9px;
margin: 0 0 22px;
border-radius: 5px;
background-color: ${props => props.theme.palette.core.primary};
border: 0;
cursor: pointer;
font-family: ${props => props.theme.palette.typography.primaryFont};
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