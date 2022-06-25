import React from 'react';
import { Props } from './error-message-type';
import { Error } from './error-message.styled';

export default function ErrorMessage({ message }: Props) {
  return (
    <Error>
      {message}
    </Error>
  );
}
