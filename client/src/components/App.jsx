import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    <>
      <h1>OMAKASE</h1>
      <form onSubmit={handleSubmit}>
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
    </>

  // form component
  // recipe component
  // submit/go back button
  );
}

export default App;
