import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_URL } from 'screens/login/login.type';
import { Props } from './guard.type';
import { tokenSelector } from '../../store/user/user.selector';

export default function Guard({ children }: Props) {
  const token = useSelector(tokenSelector);
  const navigate = useNavigate();
  const from = useLocation();

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

  if (!token) return null;

  return children;
}
