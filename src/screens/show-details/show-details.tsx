import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from 'components/header/header';
import { listSelector } from 'store/shows/shows.selector';
import { DetailsContainer } from './shows-details.styled';

export default function ShowDetails() {
  const param = useParams();
  const shows = useSelector(listSelector);
  const movies = shows.movie;
  const tvShows = shows.tv_show;
  const allShows = movies.concat(tvShows);

  const result = allShows.filter((item) => item.id === +param.id!);

  return (
    <DetailsContainer>
      <Header />
      <img src={result[0].cover} alt="show cover" />
      <div>
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
        <button type="button">Add to my list</button>
      </div>
    </DetailsContainer>
  );
}
