import React from 'react';
import { useSelector } from 'react-redux';
import { dataSelector } from 'store/shows/shows.selector';
import Slider from 'react-slick';
import Item from './components/item/item';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Arrow from './components/arrow/arrow';
import { Title } from './components/title/title.styled';

export default function ShowsList() {
  const data = useSelector(dataSelector);
  const movies = data.movie;
  const tvShow = data.tv_show;

  return (
    <Slider
      slidesToShow={5}
      centerMode
      nextArrow={<Arrow />}
      prevArrow={<Arrow />}
    >
      <Title>Filmes</Title>
      {movies?.map(({ cover, id }) => (
        <Item cover={cover} id={id} />
      ))}

      <Title>Tv Shows</Title>
      {movies?.map(({ cover, id }) => (
        <Item cover={cover} id={id} />
      ))}

      <Title>Filmes</Title>
      {movies?.map(({ cover, id }) => (
        <Item cover={cover} id={id} />
      ))}
    </Slider>
  );
}
