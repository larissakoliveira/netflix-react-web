import { PayloadAction } from '@reduxjs/toolkit';

export enum Category {
  MOVIE = 'movie',
  TV_SHOWS = 'tv_show',
}

export type Show = {
  id: number
  title: string
  director: string
  actors: string[]
  description: string
  cover: string
  category: Category
  episodes: []
};

export type List = {
  [key: string]: Show[]
};

export type Data = {
  myList: Show[]
  list: List
};

export type Settings = {
  loading: boolean
};

export type Error = string;

export type ShowDetailsIdPayload = number;

export type Shows = {
  data: Data
  settings: Settings
  showDetailsId: number
  error: Error
};

export type BaseReducer<Payload> = (state: Shows, action: PayloadAction<Payload>) => void;

export type GetList = BaseReducer<undefined>;
export type SetList = BaseReducer<List>;
export type SetMyList = BaseReducer<Data['myList']>;
export type SetSettings = BaseReducer<Settings>;
export type SetError = BaseReducer<Error>;
export type ShowDetailsId = BaseReducer<ShowDetailsIdPayload>;
