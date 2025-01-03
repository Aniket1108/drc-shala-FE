import React from 'react'

import Container from '@mui/material/Container';

import CoursesIntro from 'sections/landing/courses/CourseIntro';
import Products from 'pages/products/product'

const courses = () => {
    return (
        <Container sx={{ marginTop: "60px", marginBottom: "50px" }}>
            <CoursesIntro />
            <Products />
        </Container>
    )
}

export default courses