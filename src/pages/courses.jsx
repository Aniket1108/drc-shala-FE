import React from 'react'

import Container from '@mui/material/Container';

import CoursesIntro from 'sections/landing/courses/CourseIntro';
import Products from 'pages/products/product'
import TestSeries from 'sections/landing/test-series/TestSeries';

const courses = ({ type }) => {
    return (
        <Container sx={{ marginTop: "60px", marginBottom: "50px" }}>
            {
                type == "course" ?
                    <CoursesIntro />
                    :
                    <TestSeries />
            }
            <Products type={type} />
        </Container>
    )
}

export default courses