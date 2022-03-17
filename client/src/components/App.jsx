/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../materialdesigntheme.js';
import Recipe from './Recipe.jsx';

function App() {
  const [mainIngredient, setMainIngredient] = useState('');
  const [showRecipe, setShowRecipe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowRecipe(!showRecipe);
    axios.get('/api/recipes', {
      params: {
        search: mainIngredient,
      },
    })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <ThemeProvider theme={theme}>
      <Typography>
        <Container sx={{ bgcolor: 'primary.main' }}>
          <Container>
            <h1>OMAKASE</h1>
            <form onSubmit={handleSubmit} sx={{ height: '100vh' }}>
              <input
                name="mainIngr"
                type="text"
                placeholder="Main Ingredient"
                value={mainIngredient}
                onChange={(e) => setMainIngredient(e.target.value)}
              />
              <input
                type="submit"
                value="Submit"
              />
            </form>
          </Container>
          {/* <Container> */}
            <Recipe />
          {/* </Container> */}
        </Container>
      </Typography>
    </ThemeProvider>
  );
}

export default App;
