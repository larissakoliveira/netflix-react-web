import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showsActions } from 'store/shows/shows.slice';
import { listSelector } from '../../store/shows/shows.selector';

export default function Shows() {
  const list = useSelector(listSelector);
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(showsActions.getList());
    },
    [],
  );

  useEffect(
    () => {
      console.log(list);
    },
    [list],
  );

  return (
    <h1>SHOWS</h1>
  );
}
