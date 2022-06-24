import { useSelector } from 'react-redux';
import { List } from 'store/shows/shows.type';
import axiosInstance from 'modules/axios/axios';
import { tokenSelector } from '../../store/user/user.selector';

export const showsService = () => {
  const token = useSelector(tokenSelector);
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const getList = () => axiosInstance.get<List>('/shows', { headers });

  return {
    getList,
  };
};
