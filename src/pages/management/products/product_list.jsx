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


function ProductList() {
    const navigate = useNavigate();
    const useHttpMethod = useHttp();

    const [isLoading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        useHttpMethod.get("/app/products/list").then((res) => {
            if (res.statusCode == 200) {
                setProducts(res.data.result)
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
                    Product Management
                </Typography>

                <Button
                    variant="contained"
                    disabled
                >
                    Add Product
                </Button>
            </Box>

            <TableContainer component={Paper} elevation={2}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold' }}>Product ID</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Title</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Type</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Stream</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>standard</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }} align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products?.map((product) => (
                            <TableRow key={product.id} hover>
                                <TableCell sx={{ width: 120, textAlign: 'center' }}>
                                    <Typography variant="subtitle1" component="div">
                                        {product.product_id}
                                    </Typography>
                                </TableCell>
                                <TableCell sx={{ minWidth: 200 }}>
                                    <Typography variant="subtitle1" component="div">
                                        {product.title}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                                        <Chip
                                            key={product.product_type}
                                            label={product.product_type}
                                            size="small"
                                            color="primary"
                                            variant="outlined"
                                        />

                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                                        {product.stream}
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                                        {product.standard}
                                    </Box>
                                </TableCell>
                                <TableCell align="center">
                                    <Button
                                        variant="outlined"
                                        onClick={() => navigate(`/management/product-details/${product.product_id}`)}
                                        size="small"
                                    >
                                        View / Edit
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

export default ProductList;