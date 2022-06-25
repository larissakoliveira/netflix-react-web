import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showsActions } from 'store/shows/shows.slice';
import { dataSelector } from '../../store/shows/shows.selector';

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
    <h1>SHOWS</h1>
  );
}
