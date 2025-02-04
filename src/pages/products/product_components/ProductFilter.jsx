import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

// material-ui
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project-imports

// ==============================|| PRODUCT - Courses FILTER ||============================== //

function Courses({ course, handelFilter }) {
  const [isGenderLoading, setGenderLoading] = useState(true);
  useEffect(() => {
    setGenderLoading(false);
  }, []);

  return (
    <Stack>
      {isGenderLoading ? (
        <Skeleton variant="rectangular" width="100%" height={42} />
      ) : (
        <>
          <Typography variant="h5">Courses</Typography>
          <Box sx={{ pl: 0.5 }}>
            <Stack>
              <FormControlLabel
                control={<Checkbox checked={course.some((item) => item == 5)} />}
                onChange={() => handelFilter('course', 5)}
                label="Foundation ( 7th - 10th )"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={course.some((item) => item == 1)}
                    onChange={() => handelFilter('course', 1)}
                  />
                }
                label="NEET"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={course.some((item) => item == 2)}
                    onChange={() => handelFilter('course', 2)}
                  />
                }
                label="JEE"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={course.some((item) => item === 3)}
                    onChange={() => handelFilter('course', 3)}
                  />
                }
                label="MHT-CET"
              />
            </Stack>
          </Box>
        </>
      )}
    </Stack>
  );
}

// ==============================|| PRODUCT GRID - CATEGORIES FILTER ||============================== //

function Standard({ standard, handelFilter }) {
  const [isCategoriesLoading, setCategoriesLoading] = useState(true);
  useEffect(() => {
    setCategoriesLoading(false);
  }, []);

  return (
    <Stack>
      {isCategoriesLoading ? (
        <Grid item xs={12}>
          <Skeleton variant="rectangular" width="100%" height={96} />
        </Grid>
      ) : (
        <>
          <Typography variant="h5">Standard</Typography>
          <Box sx={{ pl: 0.5 }}>
            <Stack>
              <FormControlLabel
                control={<Checkbox checked={standard.some((item) => item === 6)} />}
                onChange={() => handelFilter('standard', 6)}
                label="11th"
              />
              <FormControlLabel
                control={<Checkbox checked={standard.some((item) => item === 7)} />}
                onChange={() => handelFilter('standard', 7)}
                label="12th"
              />
              <FormControlLabel
                control={<Checkbox checked={standard.some((item) => item === 8)} />}
                onChange={() => handelFilter('standard', 8)}
                label="11th / 12th Repeater"
              />
            </Stack>
          </Box>
        </>
      )}
    </Stack>
  );
}

const ProductFilter = ({ filter, handelFilter }) => (
  <Grid container direction="column" rowSpacing={3}>
    <Grid item>
      <Courses course={filter.course} handelFilter={handelFilter} />
    </Grid>
    <Grid item>
      <Standard standard={filter.standard} handelFilter={handelFilter} />
    </Grid>
  </Grid>
);

export default ProductFilter;

Courses.propTypes = { course: PropTypes.array, handelFilter: PropTypes.func };

Standard.propTypes = { standard: PropTypes.array, handelFilter: PropTypes.func };

ProductFilter.propTypes = { filter: PropTypes.any, handelFilter: PropTypes.func };
