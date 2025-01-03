import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

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
// import { resetCart, useGetCart } from 'api/cart';
// import { filterProducts } from 'api/products';

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

// ==============================|| ECOMMERCE - PRODUCTS ||============================== //

export default function ProductsPage() {
    const theme = useTheme();

    // const { cart } = useGetCart();
    const { container } = useConfig();

    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    // product data
    const initialProducts = useLoaderData();
    const [products, setProducts] = useState(initialProducts);

    // useEffect(() => {
    //     // clear cart if complete order
    //     if (cart && cart.step > 2) {
    //         resetCart();
    //     }

    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    const [openFilterDrawer, setOpenFilterDrawer] = useState(true);
    const handleDrawerOpen = () => {
        setOpenFilterDrawer((prevState) => !prevState);
    };

    // filter
    const initialState = {
        search: '',
        sort: 'low',
        courses: [],
        standard: ['all'],
        colors: [],
        price: '',
        rating: 0
    };
    const [filter, setFilter] = useState(initialState);

    const filterData = async () => {
        setProducts([
            {
                "id": 5,
                "image": "prod-5.png",
                "name": "Canon EOS 1500D 24.1 Digital SLR",
                "brand": "Canon",
                "offer": "30%",
                "description": "SLR Camera (Black) with EF S18-55...",
                "about": "Image Enlargement: After shooting, you can enlarge photographs of the objects for clear zoomed view. Change In Aspect Ratio: Boldly crop the subject and save it with a composition that has impact. You can convert it to a 1:1 square format, and after shooting you can create a photo that will be popular on SNS.",
                "quantity": 50,
                "rating": 3.5,
                "discount": 15,
                "salePrice": 15.99,
                "offerPrice": 12.99,
                "courses": "NEET",
                "standard": [
                    "11"
                ],
                "colors": [
                    "warningMain",
                    "primary200"
                ],
                "popularity": 6091968610304000,
                "date": 8313557112324096,
                "created": "2024-12-31T18:47:19.773Z",
                "isStock": true,
                "new": 25
            },
            {
                "id": 7,
                "image": "prod-7.png",
                "name": "Apple MacBook Pro with Iphone",
                "brand": "Apple",
                "description": "11th Generation Intel® Core™ i5-11320H ...",
                "about": "Great choice for those who love poweful and fast laptopts. It comes with 2TB of harddrive and 12GB of RAM.Its fast and comes with a powerful processor",
                "quantity": 70,
                "rating": 4,
                "discount": 16,
                "offerPrice": 14.59,
                "courses": "NEET",
                "standard": [
                    "12"
                ],
                "colors": [
                    "errorDark",
                    "secondaryMain",
                    "errorMain"
                ],
                "popularity": 7511163459862528,
                "date": 6254159986688000,
                "created": "2025-01-17T06:27:19.773Z",
                "isStock": true,
                "new": 30
            },
            {
                "id": 4,
                "image": "prod-4.png",
                "name": "Luxury Watches Centrix Gold",
                "brand": "Centrix",
                "offer": "20%",
                "description": "7655 Couple (Refurbished)...",
                "about": "This product from Centrix is a classic choice who love classical products. It it made of pure gold and weighs around 50 grams",
                "quantity": 3,
                "rating": 4,
                "discount": 20,
                "salePrice": 36,
                "offerPrice": 29.99,
                "courses": "NEET",
                "standard": [
                    "Reapeter"
                ],
                "colors": [
                    "errorLight",
                    "warningMain"
                ],
                "popularity": 5221736679211008,
                "date": 3143480025022464,
                "created": "2024-12-26T21:47:19.773Z",
                "isStock": true,
                "new": 15
            },
            {
                "id": 3,
                "image": "prod-3.png",
                "name": "Fitbit MX30 Smart Watch",
                "brand": "Fitbit",
                "offer": "30%",
                "description": "(MX30- waterproof) watch",
                "about": "Fitbit is well known for making amazing smartwatches and this product is one of them, it is waterproof and battery power can last upto 2 days. Great product for smartwatch lovers",
                "quantity": 70,
                "rating": 4.5,
                "discount": 40,
                "salePrice": 85,
                "offerPrice": 49.9,
                "courses": "JEE",
                "standard": [
                    "11"
                ],
                "colors": [
                    "primary200",
                    "primaryDark"
                ],
                "popularity": 1716011562696704,
                "date": 3235048922808320,
                "created": "2024-12-29T18:42:19.773Z",
                "isStock": true,
                "new": 35
            },
            {
                "id": 2,
                "image": "prod-2.png",
                "name": "Boat On-Ear Wireless ",
                "brand": "Boat",
                "description": "Mic(Bluetooth 4.2, Rockerz 450R...",
                "about": "Boat On-ear wireless headphones comes with bluethooth technology, comes with better sound quality and weighs around 200gm which seems very light when using ",
                "quantity": 45,
                "rating": 3.5,
                "discount": 10,
                "offerPrice": 81.99,
                "courses": "MHT-CET",
                "standard": [
                    "11"
                ],
                "colors": [
                    "primary200",
                    "successLight",
                    "secondary200",
                    "warningMain"
                ],
                "popularity": 3674032507453440,
                "date": 600948923695104,
                "created": "2024-12-23T19:23:19.773Z",
                "isStock": false,
                "new": 40
            },
            {
                "id": 6,
                "image": "prod-6.png",
                "name": "Apple iPhone 13 Mini ",
                "brand": "Apple",
                "offer": "70%",
                "description": "13 cm (5.4-inch) Super",
                "about": "It fits for those who love photography since it has 48MP camera which shoots great photos even in low light. Also it has 8GB of RAm and 4000MAH battery which can last upto 12 hours a day ",
                "quantity": 40,
                "rating": 4.5,
                "discount": 10,
                "offerPrice": 86.99,
                "courses": "MHT-CET",
                "standard": [
                    "Reapeter"
                ],
                "colors": [
                    "primaryDark"
                ],
                "popularity": 6201476837801984,
                "date": 212166948945920,
                "created": "2025-01-09T14:32:19.773Z",
                "isStock": true,
                "new": 15
            }
        ]);
        setLoading(false);
    };

    useEffect(() => {
        filterData();
    }, [filter]);

    let productResult = <></>;
    if (products && products.length > 0) {
        productResult = products.map((product, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
                <ProductCard
                    id={product.id}
                    image={product.image}
                    name={product.name}
                    brand={product.brand}
                    offer={product.offer}
                    isStock={product.isStock}
                    description={product.description}
                    offerPrice={product.offerPrice}
                    salePrice={product.salePrice}
                    rating={product.rating}
                    color={product.colors ? product.colors[0] : undefined}
                    open={openFilterDrawer}
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
