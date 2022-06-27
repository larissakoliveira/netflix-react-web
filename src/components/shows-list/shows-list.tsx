import Slider from 'react-slick';
import { Box } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import React, { useEffect } from 'react';
import 'slick-carousel/slick/slick-theme.css';
import { LOGIN_URL } from 'screens/login/login.type';
import { USER_TOKEN_COOKIE } from 'store/user/user.type';
import { useLocation, useNavigate } from 'react-router-dom';
import { Props } from 'components/shows-list/shows-list.type';
import Item from 'components/shows-list/components/item/item';
import Arrow from 'components/shows-list/components/arrow/arrow';
import { Title } from 'components/shows-list/components/title/title.styled';

export default function ShowsList({
  title,
  shows,
  autoplay,
  autoplaySpeed,
  arrows = true,
  width = '200px',
  height = '260px',
  slidesToShow = 5,
}: Props) {
  const navigate = useNavigate();
  const from = useLocation();
  const token = localStorage.getItem(USER_TOKEN_COOKIE);

  useEffect(
    () => {
      if (!token) {
        navigate(LOGIN_URL, {
          state: { from },
        });
      }
    },
    [token],
  );
  return (
    <Box margin="82px 0">
      {title && <Title>{title}</Title>}
      <Slider
        centerMode
        arrows={arrows}
        autoplay={autoplay}
        nextArrow={<Arrow />}
        prevArrow={<Arrow />}
        slidesToShow={slidesToShow}
        autoplaySpeed={autoplaySpeed}
      >
        {shows.map(({ cover, id }) => (
          <Item
            id={id}
            key={id}
            cover={cover}
            width={width}
            height={height}
          />
        ))}
      </Slider>
    </Box>
  );
}
