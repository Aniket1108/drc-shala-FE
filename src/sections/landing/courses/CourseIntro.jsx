import React from 'react';
import { Box, Typography, Container, Button, Grid } from '@mui/material';

const CoursesIntro = () => {
    return (
        <Box sx={{ bgcolor: 'background.default' }}>
            <Container>
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                        Explore Our Courses
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: '600px', margin: '0 auto' }}>
                        At Drcshala, we offer a range of courses designed to help students excel in competitive exams like NEET, JEE, and
                        MHT-CET, as well as build a strong foundation in grades 6 to 10. Each course is meticulously crafted to ensure a
                        comprehensive and engaging learning experience.
                    </Typography>
                </Box>

                {/* Benefits Section */}
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1, color: 'primary.main' }}>
                                Expert Guidance
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Learn from top educators and industry experts with years of experience in their respective fields.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1, color: 'primary.main' }}>
                                Comprehensive Resources
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Access detailed study materials, interactive lessons, and real-time practice tests.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1, color: 'primary.main' }}>
                                Personalized Learning
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Tailored courses to match individual learning needs, ensuring maximum progress and success.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default CoursesIntro;
