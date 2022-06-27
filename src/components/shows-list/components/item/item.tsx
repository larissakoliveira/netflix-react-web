import React from 'react';
import { Link } from 'react-router-dom';
import { Props } from 'components/shows-list/components/item/item.type';
import { Cover } from './item.styled';

export default function Item({
  id,
  cover,
  width,
  height,
}: Props) {
  const to = id.toString();

  return (
    <Link to={to}>
      <Cover
        cover={cover}
        width={width}
        height={height}
      />
    </Link>
  );
}
