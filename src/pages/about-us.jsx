import React from 'react';
import { Container, Grid, Typography, Box, Button, Stack } from '@mui/material';
import { styled } from '@mui/system';
import aboutUsImg from "assets/images/landing/aboutUs.png"

// Custom styles
const StyledImage = styled('img')(({ theme }) => ({
    width: '100%',
    height: 'auto',
    borderRadius: theme.shape.borderRadius,
}));

const AboutUs = () => {
    return (
        <Box sx={{ bgcolor: 'background.default', py: 8, pt: "150px" }}>
            <Container>
                {/* Hero Section */}
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                            About DRC Shala
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
                            At DRC Shala, we believe in empowering students to achieve their dreams. Our mission is to provide high-quality
                            educational resources and tools to help students excel in competitive exams like NEET, JEE, and MHT-CET. With
                            comprehensive courses, interactive test series, and expert-curated study materials, we strive to make learning
                            accessible, engaging, and effective.
                        </Typography>
                        <Button variant="contained" color="primary" size="large">
                            Learn More
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <StyledImage src={aboutUsImg} alt="About DRC Shala" />
                    </Grid>
                </Grid>

                {/* Mission and Vision Section */}
                <Box sx={{ mt: 8 }}>
                    <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'text.primary', textAlign: 'center' }}>
                        Our Mission & Vision
                    </Typography>
                    <Grid container spacing={4} sx={{ mt: 4 }}>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 3 }}>
                                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                                    Mission
                                </Typography>
                                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                                    To make quality education accessible to every student, empowering them to succeed in their academic and career
                                    aspirations.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 3 }}>
                                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                                    Vision
                                </Typography>
                                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                                    To be the leading educational platform offering innovative and personalized learning experiences to students
                                    across the globe.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                {/* Call to Action Section */}
                <Box sx={{ mt: 8, textAlign: 'center' }}>
                    <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                        Ready to Achieve Your Dreams?
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
                        Join DRC Shala today and take the first step towards success.
                    </Typography>
                    <Button variant="contained" color="primary" size="large">
                        Get Started
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default AboutUs;
