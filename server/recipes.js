const axios = require('axios');
require('dotenv').config();

const { API_KEY } = process.env;
const { RECIPES_URL } = process.env;

module.exports = {
  getRecipes: (req, res) => {
    axios.get(`${RECIPES_URL}/complexSearch`, {
      params: {
        includeIngredients: req.query.search,
        number: 100,
        addRecipeInformation: true,
        addRecipeNutrition: true,
        ignorePantry: true,
        apiKey: API_KEY,
        fillIngredients: true,
      },
    })
      .then((response) => res.status(200).send(response.data))
      .catch((err) => res.status(404).send(err));
  },
};
