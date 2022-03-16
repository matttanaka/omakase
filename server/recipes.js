const axios = require('axios');
require('dotenv').config();

const { API_KEY } = process.env;
const { RECIPES_URL } = process.env;

// const config = {
//   params: {
//     ingredients: 'chicken',
//     number: 100,
//     ignorePantry: true,
//     apiKey: API_KEY,
//   },
// };

module.exports = {
  getRecipesByIngredients: (req, res) => {
    // ***get search tearm by req.query.______
    // const variable = req.query.search;
    // console.log(`this is variable: ${JSON.stringify(variable)}`);
    // res.send(`this is variable: ${JSON.stringify(variable)}`);
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

// {
//   "data": {},
//   "status": 200,
//   "statusText": "OK",
//   "headers": {
//       "connection": "keep-alive",
//       "content-length": "2",
//       "content-type": "application/json; charset=utf-8",
//       "date": "Wed, 16 Mar 2022 09:07:30 GMT",
//       "etag": "W/\"2-vyGp6PvFo4RvsFtPoIWeCReyIC8\"",
//       "keep-alive": "timeout=5",
//       "x-powered-by": "Express"
//   },
//   "config": {
//       "transitional": {
//           "silentJSONParsing": true,
//           "forcedJSONParsing": true,
//           "clarifyTimeoutError": false
//       },
//       "transformRequest": [
//           null
//       ],
//       "transformResponse": [
//           null
//       ],
//       "timeout": 0,
//       "xsrfCookieName": "XSRF-TOKEN",
//       "xsrfHeaderName": "X-XSRF-TOKEN",
//       "maxContentLength": -1,
//       "maxBodyLength": -1,
//       "headers": {
//           "Accept": "application/json, text/plain, */*"
//       },
//       "params": {
//           "search": "f2f2323"
//       },
//       "method": "get",
//       "url": "/api/recipes"
//   },
//   "request": {}
// }