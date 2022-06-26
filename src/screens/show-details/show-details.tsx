import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { listSelector } from 'store/shows/shows.selector';
import { Container } from './shows-details.styled';
// import { showsActions } from 'store/shows/shows.slice';
// import { showDetailsIdSelector } from '../../store/shows/shows.selector';
// import Item from '../../components/shows-list/components/item/item';

export default function ShowDetails() {
  // const dispatch = useDispatch();
  const param = useParams();
  const shows = useSelector(listSelector);
  const movies = shows.movie;
  const tvShows = shows.tv_show;
  const allShows = movies.concat(tvShows);
  // if (param.id) {
  //   const output = allShows.filter((item) => item.id === +param.id);
  // }

  // const showId = useSelector(showDetailsIdSelector);

  // useEffect(
  //   () => {
  //     dispatch(showsActions.showDetailsId(+param.id!));
  //   },
  //   [param],
  // );
  const result = allShows.filter((item) => item.id === +param.id!);

  return (
    <Container>
      <img src={result[0].cover} alt="show cover" />
      <h1>{result[0].title}</h1>
      <p>{result[0].description}</p>
      <p>
        Director:
        { ' ' }
        {result[0].director}
      </p>
      <p>
        Actors:
        { ' ' }
        {result[0].actors}
      </p>
    </Container>
  );
}
