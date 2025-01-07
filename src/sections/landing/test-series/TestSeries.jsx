import React from 'react';
import { Box, Typography, Container, Button, Grid } from '@mui/material';

const TestSeriesIntro = () => {
    return (
        <Box sx={{ bgcolor: 'background.default', py: 6 }}>
            <Container>
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                        Boost Your Preparation with Our Test Series
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: '600px', margin: '0 auto' }}>
                        Our test series are crafted to provide students with a real exam-like experience. Designed for NEET, JEE, and
                        MHT-CET aspirants, they help students evaluate their performance, understand their strengths, and work on their
                        weaknesses.
                    </Typography>
                </Box>

                {/* Features Section */}
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1, color: 'primary.main' }}>
                                Real Exam Simulation
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Experience realistic test scenarios that mirror actual exam conditions, ensuring you’re prepared for the big day.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1, color: 'primary.main' }}>
                                Detailed Performance Analysis
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Get in-depth analysis of your performance with insights into time management, accuracy, and topic-wise strengths.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1, color: 'primary.main' }}>
                                Adaptive Difficulty Levels
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Challenge yourself with tests that adjust difficulty based on your performance, helping you improve progressively.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                {/* Call to Action */}
                <Box sx={{ textAlign: 'center', mt: 6 }}>
                    <Button variant="contained" color="primary" size="large">
                        Enroll Now for Test Series
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default TestSeriesIntro;
