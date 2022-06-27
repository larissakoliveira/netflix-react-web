import React from 'react';
import { Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import userSlice from 'store/user/user.slice';
import userProfile from 'assets/imgs/user.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import netflixLogo from 'assets/imgs/netflix-title.png';
// import { ActionCreatorWithOptionalPayload } from '@reduxjs/toolkit';
import { ImageContainer, LogOff, MenuContainer } from './header.styled';

export default function Header() {
  const dispatch = useDispatch();
  const logoff = () => dispatch(userSlice.actions.logOff());

  return (
    <Grid container mt={5}>
      <MenuContainer>
        <GiHamburgerMenu color="#ffffff" />
      </MenuContainer>
      <ImageContainer src={netflixLogo} />
      <LogOff src={userProfile} onClick={logoff} />
    </Grid>
  );
}
