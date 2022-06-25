import { Show } from 'store/shows/shows.type';

export type Props = Pick<Show, 'id' | 'cover'>;

export type Cover = Pick<Props, 'id'>;
