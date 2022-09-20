import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '42px', xs: '25px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#FF2625" fontWeight="600" fontSize="26px">Checkers Gym</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="5px">
      Sweat, Smile <br />
      And Repeat
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '35px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '1rem' }}>Explore Exercises</a>
    </Stack>
    <Typography className="hero-banner-typo" fontWeight={600} sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Exercise
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;
