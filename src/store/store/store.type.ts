import { Shows } from 'store/show/show.type';
import { User } from 'store/user/user.type';

export type Store = {
  user: User,
  show: Shows
};
