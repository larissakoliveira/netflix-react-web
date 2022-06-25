import React from 'react';
import { Grid } from '@mui/material';
import netflixLogo from 'assets/imgs/netflix-title.png';
import { ImageContainer } from './header.styled';

export default function Header() {
  return (
    <Grid container>
      <ImageContainer src={netflixLogo} />
    </Grid>
  );
}
