import { Grid } from '@mui/material';
import Button from 'components/button/button';
import ErrorMessage from 'components/error-message/error-message';
import Input from 'components/input/input';
import React, { useCallback, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_URL } from 'screens/login/login.type';
import userService from 'services/user/user';
import { signUpSchema } from './sign-up.schema';
import { Wrapper } from './sign-up.styled';

export default function SignUp() {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();
  const from = useLocation();

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
        await signUpSchema.validate(data);
        resetError('');
        setData(data);
        userService().signUp(data);
        navigate(LOGIN_URL, {
          state: { from },
        });
      } catch (yupError: unknown) {
        setError((yupError as Error).message);
      }
    },
    [data],
  );

  return (
    <Wrapper
      container
      alignContent="center"
      justifyContent="center"
    >
      <h1>Sign Up</h1>
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
        <Button onClick={handleSend}>SignUp</Button>

      </Grid>
    </Wrapper>
  );
}
