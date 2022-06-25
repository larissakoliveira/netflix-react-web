import axiosInstance from 'modules/axios/axios';
import { AuthPayload, SignUp } from './user.type';

const userService = () => {
  const auth = (payload: AuthPayload) => axiosInstance.post('/auth', payload);
  const signUp = (payload: SignUp) => axiosInstance.post('/user', payload);

  return {
    auth,
    signUp,
  };
};

export default userService;
