import React, {
  useCallback,
  useState,
} from 'react';
import { Grid } from '@mui/material';
import { Wrapper } from './login.styled';
import { Error } from '../../types/yup';
import Input from 'components/input/input';
import { loginSchema } from './login.schema';
import Button from 'components/button/button';
import { IFormDataState } from './login.types';
import ErrorMessage from 'components/error-message/error-message';

export default function Form() {
  const [data, setData] = useState<IFormDataState>({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      setData((prevData) => ({
        ...prevData,
        [target.name]: target.value,
      }));
    },
    [setData],
  );

  const handleSend = useCallback(
    async () => {
      try {
        await loginSchema.validate(data);
        setError('');
      } catch (yupError: unknown) {
        setError((yupError as Error).errors[0]);
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
