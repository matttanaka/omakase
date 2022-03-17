import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Recipe from './Recipe.jsx';

function Search(props) {
  return (
    <Container sx={{ bgcolor: 'background.main', width: '100%', pt: 4 }}>
      <Box sx={{ pb: 3 }}>
        <Typography align="center" variant="h1" color="primary.dark">
          OMAKASE
        </Typography>
      </Box>
      <Box sx={{ pb: 6 }}>
        <Typography align="center" variant="h4" color="primary.main">
          Welcome to Omakase! Let us find the right dish for you.
        </Typography>
      </Box>
      <Box sx={{ pb: 2 }}>
        <Typography align="center" variant="h6" color="secondary.main">
          PLEASE ENTER THE MAIN INGREDIENT OF YOUR DISH:
        </Typography>
      </Box>
      <Container sx={{ pb: 1, width: '50%', justifyContent: 'center', alignItems: 'center' }}>
        <TextField
          // label="Main Ingredient"
          size="medium"
          value={props.mainIngredient}
          onChange={props.handleChange}
          inputProps={{ style: { textAlign: 'center' } }}
          sx={{ width: '100%', justifyContent: 'center' }}
        />
      </Container>
      {/* <Box textAlign='center'> */}
      <Container sx={{ width: '50%', justifyContent: 'center', alignItems: 'center' }}>
        <Button variant="contained" onClick={props.handleSubmit} size="large" sx={{ width: '100%' }}>
          SEARCH
        </Button>
      </Container>
      {/* </Box> */}
    </Container>
  )
}

export default Search;
