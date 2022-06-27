import axiosInstance from 'modules/axios/axios';
import { Props } from 'services/shows/shows.type';

const showsService = ({ token }: Props) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const getList = () => axiosInstance.get('/shows', config);

  const getMyList = () => axiosInstance.get('/list', config);

  const showsDetails = () => axiosInstance.get('/shows/:id', config);

  const addShowList = () => axiosInstance.post('/list', config);

  return {
    getList,
    getMyList,
    addShowList,
    showsDetails,
  };
};

export default showsService;
