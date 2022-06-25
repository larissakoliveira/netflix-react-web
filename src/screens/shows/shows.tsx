import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showsActions } from 'store/shows/shows.slice';
import { Container } from '@mui/material';
import { dataSelector } from '../../store/shows/shows.selector';
import ShowsList from '../../components/shows-list/shows-list';

export default function Shows() {
  const data = useSelector(dataSelector);
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(showsActions.getList());
    },
    [],
  );

  useEffect(
    () => {
      console.log(data);
    },
    [data],
  );

  return (
    <Container>
      <ShowsList />
    </Container>
  );
}
