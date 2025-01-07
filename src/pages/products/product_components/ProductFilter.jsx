import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

// material-ui
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';
import Skeleton from '@mui/material/Skeleton';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';

// project-imports
import Colors from './Colors';

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
                control={<Checkbox checked={course.some((item) => item === 'foundation')} />}
                onChange={() => handelFilter('course', 'foundation')}
                label="Foundation ( 7th - 10th )"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={course.some((item) => item === 'neet')}
                    onChange={() => handelFilter('course', 'neet')}
                  />
                }
                label="NEET"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={course.some((item) => item === 'jee')}
                    onChange={() => handelFilter('course', 'jee')}
                  />
                }
                label="JEE"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={course.some((item) => item === 'mht-cet')}
                    onChange={() => handelFilter('course', 'mht-cet')}
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
                control={<Checkbox checked={standard.some((item) => item === '11')} />}
                onChange={() => handelFilter('standard', '11')}
                label="11th"
              />
              <FormControlLabel
                control={<Checkbox checked={standard.some((item) => item === '12')} />}
                onChange={() => handelFilter('standard', '12')}
                label="12th"
              />
              <FormControlLabel
                control={<Checkbox checked={standard.some((item) => item === 'repeater')} />}
                onChange={() => handelFilter('standard', 'repeater')}
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
