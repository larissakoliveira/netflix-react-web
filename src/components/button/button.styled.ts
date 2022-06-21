import styled from 'styled-components';

export const Button = styled.button`
border: 0;
width: 100%;
padding: 9px;
cursor: pointer;
margin: 0 0 22px;
font-size: 0.8rem;
color: ${(props) => props.theme.palette.typography.primary};
border-radius: ${(props) => props.theme.layout.border.medium};
background-color: ${(props) => props.theme.palette.core.primary};

:hover {
    opacity: 0.9    ;
}

:active {
    top: 1px;
    left: 1px;
    position: relative;
} 
`;
