import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Recipe() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={4} sm={4} md={4} alignItems="center" justifyContent="center">
          <Container sx={{ bgcolor: 'secondary.main' }}>
            <h1>Chicken Suya</h1>
            <img src="https://spoonacular.com/recipeImages/716342-312x231.jpg" alt="Recipe" />
            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                alignItems="center"
                justifyContent="center"
              >
                <Box sx={{ width: '33%' }}>
                  <Box>
                    <Typography align="center" variant="h6" color="primary.light">
                      Protein
                    </Typography>
                  </Box>
                  <Box>
                    <Typography align="center" variant="subtitle1" color="primary.dark">
                      42g
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ width: '33%' }}>
                  <Box>
                    <Typography align="center" variant="h6" color="primary.light">
                      Carbs
                    </Typography>
                  </Box>
                  <Box>
                    <Typography align="center" variant="subtitle1" color="primary.dark">
                      10g
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ width: '33%' }}>
                  <Box>
                    <Typography align="center" variant="h6" color="primary.light">
                      Fats
                    </Typography>
                  </Box>
                  <Box>
                    <Typography align="center" variant="subtitle1" color="primary.dark">
                      34g
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Box sx={{ width: '100%' }}><Typography align="center">Calories: 523g</Typography></Box>
            </Box>
          </Container>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <Container sx={{ bgcolor: 'primary.light' }} r>
            {/* <Typography align="center"> */}
            <div>INGREDIENTS</div>
            <div>DIRECTIONS</div>
            {/* </Typography> */}
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Recipe;
