/* eslint-disable import/extensions */
const router = require('express').Router();
const recipes = require('./recipes.js');

router.get('/recipes', recipes.getRecipes);

module.exports = router;
