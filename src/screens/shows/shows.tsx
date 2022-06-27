import React, { useEffect } from 'react';
import { Container } from '@mui/material';
import Header from 'components/header/header';
import { useDispatch, useSelector } from 'react-redux';
import { showsActions } from 'store/shows/shows.slice';
import ShowsList from 'components/shows-list/shows-list';
import { listSelector, myListSelector } from 'store/shows/shows.selector';

export default function Shows() {
  const dispatch = useDispatch();

  const list = useSelector(listSelector);
  const myList = useSelector(myListSelector);
  const movies = list.movie;
  const tvShows = list.tv_show;

  useEffect(
    () => {
      dispatch(showsActions.getList());
      dispatch(showsActions.getMyList());
    },
    [],
  );

  return (
    <>
      <Header />
      <Container>
        <ShowsList
          autoplay
          width="95%"
          height="560px"
          arrows={false}
          shows={myList}
          slidesToShow={1}
          autoplaySpeed={2400}
        />
        { myList && <ShowsList shows={myList} title="My List" />}
        { movies && <ShowsList shows={movies} title="Movies" /> }
        { tvShows && <ShowsList shows={tvShows} title="Tv Shows" /> }
      </Container>
    </>
  );
}
