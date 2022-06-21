import React from 'react';
import { Props } from './input.type';
import { Input as StyledInput } from './input.styled';

export default function Input({type, name, placeholder, onChange}: Props) {
  return (
    <StyledInput
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
