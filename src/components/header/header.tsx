import React from 'react';
import { Grid } from '@mui/material';
import userProfile from 'assets/imgs/user.png';
import userSlice from 'store/user/user.slice';
import { GiHamburgerMenu } from 'react-icons/gi';
import netflixLogo from 'assets/imgs/netflix-title.png';
import { USER_TOKEN_COOKIE } from 'store/user/user.type';
import { ImageContainer, LogOff } from './header.styled';

export default function Header() {
  const logoff = async () => {
    const { data } = userSlice.getInitialState();
    userSlice.actions.setData(data);
    await localStorage.removeItem(USER_TOKEN_COOKIE);
  };

  return (
    <Grid container mt={5}>
      <GiHamburgerMenu color="#ffffff" />
      <ImageContainer src={netflixLogo} />
      <LogOff src={userProfile} onClick={logoff} />
    </Grid>
  );
}
