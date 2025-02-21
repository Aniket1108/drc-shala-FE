import { useState, useEffect } from 'react';
import {
    Container,
    Typography,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button,
    Box,
    Chip,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { useHttp } from 'src/utils/api_intercepters.js';


function TestSeries() {
    const navigate = useNavigate();
    const useHttpMethod = useHttp();

    const [isLoading, setLoading] = useState(true);
    const [allTestSeries, setAllTestSeries] = useState([]);

    useEffect(() => {
        useHttpMethod.get(`/app/products/list?product_type_id=2`).then((res) => {
            if (res.statusCode == 200) {
                setAllTestSeries(res.data.result)
            } else {
                alert(res.message)
            }
        })
        setLoading(false);
    }, []);

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
                    All Test Series
                </Typography>


            </Box>

            <TableContainer component={Paper} elevation={2}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold' }} align="center">Test ID</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Title</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Stream</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>standard</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }} align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {allTestSeries?.map((test) => (
                            <TableRow key={test.id} hover>
                                <TableCell sx={{ width: 120, textAlign: 'center' }}>
                                    <Typography variant="subtitle1" component="div">
                                        {test.product_id}
                                    </Typography>
                                </TableCell>
                                <TableCell sx={{ minWidth: 200 }}>
                                    <Typography variant="subtitle1" component="div">
                                        {test.title}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                                        {test.stream}
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                                        {test.standard}
                                    </Box>
                                </TableCell>
                                <TableCell align="center">
                                    <Button
                                        variant="outlined"
                                        onClick={() => navigate(`/management/product-details/${test.product_id}`)}
                                        size="small"
                                    >
                                        Details
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default TestSeries;