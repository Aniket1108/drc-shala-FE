import React from 'react';
import { Box, Typography, Container, Button, Grid } from '@mui/material';

const TestSeriesIntro = () => {
    return (
        <Box sx={{ bgcolor: 'background.default', py: 6 }}>
            <Container>
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                    📢 Boost Your Exam Readiness with Drcshala's Test Series!
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: '600px', margin: '0 auto' }}>
                    Experience real exam-like practice for NEET, JEE, and MHT-CET with our expertly designed test series. 
                    Evaluate your performance, identify strengths, and improve weaknesses to achieve top scores!
                    📲 Enroll now or inquire today!
                    </Typography>
                </Box>

                {/* Features Section */}
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1, color: 'primary.main' }}>
                            📝 Real Exam Simulation
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Prepare like never before—experience real exam conditions, identify and improve on your weaknesses, enhance your strengths!
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1, color: 'primary.main' }}>
                            📊 Detailed Performance Analysis
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Get in-depth analysis of your performance with insights into time management, accuracy, and topic-wise strengths.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1, color: 'primary.main' }}>
                            🎯 Adaptive Difficulty Levels
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
                    👉 Click Here to Enroll 🔍 
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default TestSeriesIntro;
