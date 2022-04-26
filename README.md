# Omakase

Quickly select a recipe based on a main ingredient and make your meal prep a breeze! 

Omakase streamlines meal prep by displaying a single recipe based on the user-provided main ingredient and only showing essential information like ingredients, direction, and macronutrients for each recipe. Recipes are pulled from a large database provided by the Spoonacular API. 

This project was built as part of a coding to challenge to create a minimum viable product in under 48 hours.

## Tech stack
![image](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![image](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![image](https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)

## Features

- Generate single random recipe based on main ingredient search 
- View ingredients list, directions, and macronutrient information for each recipe
- Ask for another recipe suggestion with same main ingredient if not satisfied with current recipe
- Return to main page to initiate new recipe search based on a different main ingredient

![image](/screenshots/omakasedemo.gif)

## Installation/Setup
#### 1. Fork and Clone this repo.

#### 2. Install dependences
```
npm install
```

#### 3. Set up Spoonacular Credentials
  - Make an account with the [Spoonacular API](https://spoonacular.com/food-api)
  - Take note of your API key

#### 4. Create a .env file in the root directory. Within the file, enter your newly created API key along and computer port:
```
API_KEY=
PORT=
RECIPES_URL=https://api.spoonacular.com/recipes
```

#### 5. Run server on local environment
```
npm start
```

## Contact
To contribute or ask any questions reach out to:
* [Matthew Tanaka](https://github.com/matttanaka)
