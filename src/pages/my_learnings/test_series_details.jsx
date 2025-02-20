import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Box, Typography } from '@mui/material'

import { useHttp } from 'src/utils/api_intercepters.js';

const test_series_details = () => {
    const useHttpMethod = useHttp();
    const navigate = useNavigate();

    const [allTestSeries, setAllTestSeries] = useState([]);

    useEffect(() => {
        useHttpMethod.get("/app/test-series/details").then((res) => {
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
        </>
    )
}

export default test_series_details