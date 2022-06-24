import axiosInstance from 'modules/axios/axios';
import { AuthPayload } from './user.type';

const userService = () => {
  const auth = (payload: AuthPayload) => axiosInstance.post('/auth', payload);

  return {
    auth,
  };
};

export default userService;
