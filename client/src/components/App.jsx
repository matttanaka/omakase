/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../materialdesigntheme.js';
import sampleData from '../sampleSearch.js';
import Recipe from './Recipe.jsx';
import Search from './Search.jsx';

function App() {
  const [mainIngredient, setMainIngredient] = useState('');
  const [showRecipe, setShowRecipe] = useState(false);
  const [recipeResults, setRecipeResults] = useState(null);
  const [randIdx, setRandIdx] = useState(null);
  const [singleRecipe, setSingleRecipe] = useState(null);

  const handleChange = (e) => {
    setMainIngredient(e.target.value);
  };

  const createNewIndex = () => {
    const newIdx = Math.floor(Math.random() * (recipeResults.length - 1));
    setSingleRecipe(recipeResults[newIdx]);
  }

  const handleClick = () => {
    setShowRecipe(!showRecipe);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowRecipe(!showRecipe);
    axios.get('/api/recipes', {
      params: {
        search: mainIngredient,
      },
    })
      .then((response) => {
        setRecipeResults(response.data.results);
        const randomIdx = Math.floor(Math.random() * (response.data.results.length - 1));
        console.log(randomIdx);
        setRandIdx(randomIdx);
        setSingleRecipe(response.data.results[randomIdx]);
      })
      .catch((error) => console.log(error));
  };

  return (
    <ThemeProvider theme={theme}>
      <Typography>
        {!showRecipe && (
          <Search
            handleChange={handleChange}
            mainIngredient={mainIngredient}
            handleSubmit={handleSubmit}
          />
        )}
        {showRecipe && (
          <Recipe
            recipe={singleRecipe}
            // recipe={sampleData.results[0]}
            handleClick={handleClick}
            createNewIndex={createNewIndex}
          />
        )}
      </Typography>
    </ThemeProvider>
  );
}

export default App;
