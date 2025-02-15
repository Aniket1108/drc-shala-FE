import { Box, Button, Card, CardContent, Grid, Paper, Typography } from '@mui/material';
import { useEffect, useState } from 'react';


import { useHttp } from 'src/utils/api_intercepters.js';

const test_series = () => {
    const useHttpMethod = useHttp()

    const [allTestSeries, setAllTestSeries] = useState([]);

    useEffect(() => {
        useHttpMethod.get("/app/test-series/list").then((res) => {
            if (res.statusCode == 200) {
                setAllTestSeries(res.data)
            } else {
                alert(res.message)
            }
        })
    }, [])

    return (
        <>
            <Box sx={{
                p: 2,
                mb: 2,
                border: '1px solid divider',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Typography>
                    My Test Series
                </Typography>


            </Box>


            <Grid container spacing={3}>
                {
                    allTestSeries && allTestSeries?.map((testSeries) => {
                        return (
                            <Grid item xs={12} sm={6} md={6} lg={4} key={testSeries.id}>
                                <Paper sx={{
                                    p: 2
                                }}>
                                    <Box>

                                        <Typography variant='h4'>{testSeries.title}</Typography>

                                        <Typography variant='body1'>Standard - {testSeries.standard}</Typography>

                                        <Typography variant='body1' sx={{ opacity: 0.7, mt: 2 }}>Total test scheduled - {testSeries.total_test_series}</Typography>

                                        <Typography variant='body1' sx={{ opacity: 0.7, mt: 2 }}> From - {formatDate(testSeries.start_time)}</Typography>
                                        <Typography variant='body1' sx={{ opacity: 0.7 }}> To - {formatDate(testSeries.end_time)}</Typography>
                                    </Box>

                                    <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                        mt: 3
                                    }}>
                                        <Button variant='contained'>
                                            View Details
                                        </Button>
                                    </Box>
                                </Paper>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </>
    )
}

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getUTCDate();
    const suffix = ['th', 'st', 'nd', 'rd'][(day % 10 < 4 && (day % 100 < 10 || day % 100 > 20)) ? day % 10 : 0];
    return `${day}${suffix} ${date.toLocaleString('en-US', { month: 'long', timeZone: 'UTC' })} ${date.getUTCFullYear()}`;
};

export default test_series