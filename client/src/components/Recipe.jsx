/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Recipe(props) {
  return (
    <>
      {props.recipe && (
        <Box sx={{ flexGrow: 1, pt: 3 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            alignItems="top"
            justifyContent="center"
          >
            <Grid item xs={4} sm={4} md={4} alignItems="center" justifyContent="center">
              <Container sx={{ bgcolor: 'background.main', height: '75vh' }}>
                <Button onClick={props.handleClick} sx={{ color: 'primary.dark ' }}>
                  {'< GO BACK'}
                </Button>
                <Box sx={{ width: '100%' }}>
                  <Typography align="center" variant="h3" color="secondary.main" fontWeight="500">
                    {props.recipe.title}
                  </Typography>
                </Box>
                <Box
                  component="img"
                  sx={{ width: '100%' }}
                  alt="Recipe"
                  src={props.recipe.image}
                />
                <Box>
                  <Box sx={{ width: '100%' }}>
                    <Typography align="center" variant="h5" color="primary.dark">
                      INGREDIENTS
                    </Typography>
                  </Box>
                  {props.recipe.extendedIngredients.map((ingredient) => (
                    <Box>
                      <Typography variant="subtitle1" color="primary.dark">
                        {ingredient.original}
                      </Typography>
                    </Box>
                  ))}
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid
                    container
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Box sx={{ width: '33%' }}>
                      <Box>
                        <Typography align="center" variant="h6" color="primary.main">
                          Protein
                        </Typography>
                      </Box>
                      <Box>
                        <Typography align="center" variant="subtitle1" color="primary.dark">
                          {`${Math.floor(props.recipe.nutrition.nutrients[8].amount)}g`}
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{
                      width: '33%', borderLeft: 1, borderRight: 1, borderColor: 'primary.light',
                    }}
                    >
                      <Box>
                        <Typography align="center" variant="h6" color="primary.main">
                          Carbs
                        </Typography>
                      </Box>
                      <Box>
                        <Typography align="center" variant="subtitle1" color="primary.dark">
                          {`${Math.floor(props.recipe.nutrition.nutrients[3].amount)}g`}
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ width: '33%' }}>
                      <Box>
                        <Typography align="center" variant="h6" color="primary.main">
                          Fats
                        </Typography>
                      </Box>
                      <Box>
                        <Typography align="center" variant="subtitle1" color="primary.dark">
                          {`${Math.floor(props.recipe.nutrition.nutrients[1].amount)}g`}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Box sx={{ width: '100%', borderTop: 2, borderColor: 'primary.light' }}>
                    <Typography align="center" variant="h5" fontWeight="700" fontFamily="Lekton" color="primary.dark">
                      {`${Math.floor(props.recipe.nutrition.nutrients[0].amount)} kcal`}
                    </Typography>
                  </Box>
                </Box>
              </Container>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
              <Container sx={{ bgcolor: 'background.main', height: '75vh' }}>
                <Box textAlign='right'>
                  <Button onClick={props.createNewIndex} sx={{ color: 'primary.dark ' }}>
                    {'SHOW ME SOMTHING ELSE >'}
                  </Button>
                </Box>
                <Box>
                  <Box sx={{ width: '100%' }}>
                    <Typography align="center" variant="h3" color="primary.dark">
                      DIRECTIONS
                    </Typography>
                  </Box>
                  {props.recipe.analyzedInstructions[0].steps.map((step, index) => (
                    <Box sx={{ pt: 2, pb: 2 }}>
                      <Typography variant="subtitle1" color="primary.dark">
                        {`${index + 1}) ${step.step}`}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Container>
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
}

export default Recipe;
