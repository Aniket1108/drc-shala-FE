import { useEffect, useState } from 'react';
import { useLoaderData, useSearchParams } from 'react-router-dom';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

// project-imports
import ProductCard from './product_components/ProductCard';
// import FloatingCart from 'components/cards/e-commerce/FloatingCart';

import ProductFilterDrawer from './product_components/ProductFilterDrawer';
import SkeletonProductPlaceholder from './product_components/ProductPlaceholder';
import ProductsHeader from './product_components/ProductsHeader';
import ProductEmpty from './product_components/ProductEmpty';

import useConfig from 'hooks/useConfig';
import { useHttp } from 'src/utils/api_intercepters.js';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' && prop !== 'container' })(({ theme, open, container }) => ({
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.shorter
    }),
    marginLeft: -320,
    ...(container && {
        [theme.breakpoints.only('lg')]: {
            marginLeft: !open ? -240 : 0
        }
    }),
    [theme.breakpoints.down('lg')]: {
        paddingLeft: 0,
        marginLeft: 0
    },
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.shorter
        }),
        marginLeft: 0
    })
}));

export default function ProductsPage({ type, isUser }) {
    const theme = useTheme();
    const { container } = useConfig();
    const useHttpMethod = useHttp()

    const [searchParams, setSearchParams] = useSearchParams();
    const [isLoading, setLoading] = useState(true);

    const initialProducts = useLoaderData();
    const [products, setProducts] = useState(initialProducts);
    const initialState = {
        course: [],
        standard: [],
    };
    const [filter, setFilter] = useState(initialState);

    const [openFilterDrawer, setOpenFilterDrawer] = useState(true);

    useEffect(() => {


        useHttpMethod.get("/app/products/list").then((res) => {
            if (res.statusCode == 200) {
                setProducts(res.data.result)
            } else {
                alert(res.message)
            }
        })
        setLoading(false);
    }, [filter]);

    const handleDrawerOpen = () => {
        setOpenFilterDrawer((prevState) => !prevState);
    };

    const id = searchParams.get('id');
    useEffect(() => {
        if (id) {
            initialState.course.push(id)
        }
        setFilter(initialState)
    }, [id])

    let productResult = <></>;
    if (products && products.length > 0) {
        productResult = products.map((product, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
                <ProductCard
                    id={product.product_id}
                    name={product?.details?.title}
                    type={product.product_type}
                    stream={product.stream}
                    standard={product.standard}
                    offerPrice={product.product_price}
                    salePrice={product.product_offer_price}
                    features={product?.details?.features}
                    isUser={isUser}
                />
            </Grid>
        ));
    } else {
        productResult = (
            <Grid item xs={12} sx={{ mt: 3 }}>
                <ProductEmpty handelFilter={() => setFilter(initialState)} />
            </Grid>
        );
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <ProductFilterDrawer
                filter={filter}
                setFilter={setFilter}
                openFilterDrawer={openFilterDrawer}
                handleDrawerOpen={handleDrawerOpen}
                setLoading={setLoading}
                initialState={initialState}
            />
            <Main theme={theme} open={openFilterDrawer} container={container}>
                <Grid container spacing={2.5}>
                    <Grid item xs={12}>
                        <ProductsHeader filter={filter} handleDrawerOpen={handleDrawerOpen} setFilter={setFilter} />
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={3}>
                            {isLoading
                                ? [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                                    <Grid key={item} item xs={12} sm={6} md={4} lg={4}>
                                        <SkeletonProductPlaceholder />
                                    </Grid>
                                ))
                                : productResult}
                        </Grid>
                    </Grid>
                </Grid>
            </Main>
            {/* <FloatingCart /> */}
        </Box>
    );
}
