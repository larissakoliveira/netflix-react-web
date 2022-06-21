import React from 'react';
import { Props } from './button.type';
import { Button as StyledButton } from './button.styled';

export default function Button({ onClick, children }: Props) {
  return (
    <StyledButton onClick={onClick}>
      {children}
    </StyledButton>
  )
}
