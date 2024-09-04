import React from 'react';
import { Box, Typography } from '@mui/material';
import '../css/styles.css';

const Home: React.FC = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const name = urlParams.get('name');
  const age = urlParams.get('age');

  return (
    <Box className="container">
      <Box className="content">
        <Typography variant="h4" gutterBottom>Welcome, {name}!</Typography>
        <Typography variant="h6">Your age is {age}.</Typography>
      </Box>
    </Box>
  );
};

export default Home;
