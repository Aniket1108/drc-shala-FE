import React from 'react'

import { Box } from '@mui/material'

import ProductDetails from 'pages/products/product_details'

const course_details = ({ type }) => {
    return (
        <Box>
            <ProductDetails type={type} />
        </Box>
    )
}

export default course_details