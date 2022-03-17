const axios = require('axios');
require('dotenv').config();

const { API_KEY } = process.env;
const { RECIPES_URL } = process.env;

module.exports = {
  getRecipesByIngredients: (req, res) => {
    axios.get(`${RECIPES_URL}/findByIngredients`, {
      params: {
        ingredients: req.query.search,
        number: 100,
        ignorePantry: true,
        apiKey: API_KEY,
      },
    })
      .then((response) => res.status(200).send(response.data))
      .catch((err) => res.status(404).send(err));
  },
};
