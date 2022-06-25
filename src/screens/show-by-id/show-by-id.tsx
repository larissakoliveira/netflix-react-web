import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ShowById() {
  const param = useParams();

  useEffect(
    () => {
      console.log(param, 'param');
    },
    [param],
  );

  return (
    <p>Show details!</p>
  );
}
