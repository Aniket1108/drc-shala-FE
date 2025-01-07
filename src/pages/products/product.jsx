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

export default function ProductsPage({ type }) {
    const theme = useTheme();
    const [searchParams, setSearchParams] = useSearchParams();

    const { container } = useConfig();

    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    // product data
    const initialProducts = useLoaderData();
    const [products, setProducts] = useState(initialProducts);

    const [openFilterDrawer, setOpenFilterDrawer] = useState(true);
    const handleDrawerOpen = () => {
        setOpenFilterDrawer((prevState) => !prevState);
    };

    // filter
    const initialState = {
        course: [],
        standard: [],
    };
    const [filter, setFilter] = useState(initialState);

    const id = searchParams.get('id');
    useEffect(() => {
        if (id) {
            initialState.course.push(id)
        }
        setFilter(initialState)
    }, [id])


    const filterData = async () => {
        const data = filterProducts(filter, type)
        setProducts(data);
        setLoading(false);

    };

    useEffect(() => {
        filterData();
    }, [filter, type]);

    let productResult = <></>;
    if (products && products.length > 0) {
        productResult = products.map((product, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
                <ProductCard
                    id={product.id}
                    image={product.image}
                    name={product.name}
                    salePrice={product.salePrice}
                    offerPrice={product.offerPrice}
                    type={product.type}
                    features={product.features}
                    course={product.course}
                    standard={product.standard}
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

const data = [
    {
        "id": 5,
        "image": "prod-5.png",
        "name": "NEET Course",
        "brand": "Canon",
        "salePrice": 1299,
        "offerPrice": 899,
        "course": "neet",
        "standard": "11",
        "type": "course",
        "features": [
            "Recorded lectures",
            "Test Series",
            "Up to 20 online tests",
            "Study Materials"
        ]
    },
    {
        "id": 7,
        "image": "prod-7.png",
        "name": "NEET Test Series",
        "brand": "Apple",
        "salePrice": 1299,
        "offerPrice": 899,
        "course": "neet",
        "standard": "12",
        "type": "test-series",
        "features": [
            "Test Series",
            "Up to 20 online tests",
            "Study Materials"
        ]
    },
    {
        "id": 4,
        "image": "prod-4.png",
        "name": "NEET Courses & Test Series",
        "brand": "Centrix",
        "salePrice": 1299,
        "offerPrice": 899,
        "course": "neet",
        "standard": "reapeter",
        "type": "course",
        "features": [
            "Recorded lectures",
            "Test Series",
            "Up to 20 online tests",
            "Study Materials"
        ]
    },
    {
        "id": 3,
        "image": "prod-3.png",
        "name": "JEE Courses & Test Series",
        "brand": "Fitbit",
        "salePrice": 1299,
        "offerPrice": 899,
        "course": "jee",
        "standard": "11",
        "type": "course",
        "features": [
            "Recorded lectures",
            "Test Series",
            "Up to 20 online tests",
            "Study Materials"
        ]
    },
    {
        "id": 2,
        "image": "prod-2.png",
        "name": "MHT-CET Courses & Test Series",
        "brand": "Boat",
        "salePrice": 1099,
        "offerPrice": 799,
        "course": "mht-cet",
        "standard": "11",
        "type": "course",
        "features": [
            "Recorded lectures",
            "Test Series",
            "Up to 20 online tests",
            "Study Materials"
        ]
    },
    {
        "id": 6,
        "image": "prod-6.png",
        "name": "MHT-CET Courses & Test Series",
        "brand": "Apple",
        "salePrice": 1099,
        "offerPrice": 799,
        "course": "mht-cet",
        "standard": "reapeter",
        "type": "course",
        "features": [
            "Recorded lectures",
            "Test Series",
            "Up to 20 online tests",
            "Study Materials"
        ]
    }
]

const filterProducts = (filter, type) => {
    console.log("filtering data", filter, type);
    if ((filter.course?.length || 0) > 0 || (filter.standard?.length || 0) > 0) {
        return data.filter(
            (item) =>
                item.type === type &&
                (filter.course.includes(item.course) || filter.standard.includes(item.standard))
        );
    }
    return data.filter((item) => item.type === type);
};


