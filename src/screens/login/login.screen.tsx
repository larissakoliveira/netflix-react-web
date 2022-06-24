import React, {
  useCallback,
  useState,
  useEffect,
} from 'react';
import { Grid } from '@mui/material';
import { Error } from 'types/yup';
import Input from 'components/input/input';
import userSlice from 'store/user/user.slice';
import Button from 'components/button/button';
import { useDispatch, useSelector } from 'react-redux';
import { authenticated } from 'store/user/user.selector';
import ErrorMessage from 'components/error-message/error-message';
import { Wrapper } from './login.styled';
import { loginSchema } from './login.schema';

export default function Form() {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const userAuthenticated = useSelector(authenticated);

  const handleChange = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      setError('');
      setData((prevData) => ({
        ...prevData,
        [target.name]: target.value,
      }));
    },
    [setData],
  );

  const resetError = useCallback(
    (errorMessage: string) => {
      setError(errorMessage);
    },
    [],
  );

  const handleSend = useCallback(
    async () => {
      try {
        await loginSchema.validate(data);
        resetError('');
        dispatch(userSlice.actions.authentication(data));
      } catch (yupError: unknown) {
        setError((yupError as Error).errors[0]);
      }
    },
    [data],
  );

  useEffect(() => {
    console.log(userAuthenticated);
  }, [userAuthenticated]);

  return (
    <Wrapper
      container
      alignContent="center"
      justifyContent="center"
    >
      <Grid item xs={2}>

        <Input
          type="email"
          name="email"
          placeholder="E-mail"
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Senha"
          onChange={handleChange}
        />
        <ErrorMessage message={error} />
        <Button onClick={handleSend}>Entrar</Button>

      </Grid>
    </Wrapper>
  );
}
