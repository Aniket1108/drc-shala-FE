import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const WhyDRCShalaSection = () => {
    const reasons = [
        {
            title: 'Expert Instructors',
            description: 'Learn from experienced educators who are experts in their respective fields and have a track record of student success.',
            icon: <SchoolIcon sx={{ fontSize: 50, color: '#fff' }} />,
            background: '#6a11cb', // Purple color
        },
        {
            title: 'Proven Results',
            description: 'Our students consistently achieve top ranks in competitive exams like NEET, JEE, MHT-CET, and more.',
            icon: <VerifiedUserIcon sx={{ fontSize: 50, color: '#fff' }} />,
            background: '#43cea2', // Green color
        },
        {
            title: '24/7 Support',
            description: 'Get uninterrupted access to personalized guidance and help from our support team, ensuring a smooth learning experience.',
            icon: <SupportAgentIcon sx={{ fontSize: 50, color: '#fff' }} />,
            background: '#ff758c', // Pink color
        },
        {
            title: 'Track Progress',
            description: 'Monitor your progress with detailed reports and analytics that help you stay on track and improve your performance.',
            icon: <TrendingUpIcon sx={{ fontSize: 50, color: '#fff' }} />,
            background: '#ff7eb3', // Light Pink color
        },
    ];

    return (
        <Box sx={{ padding: '4rem 0', backgroundColor: '#f9f9f9' }}>
            <Container maxWidth="lg">
                <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Why Choose DRC Shala?
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" gutterBottom>
                    Discover the benefits of learning with us and see how we help you succeed in your academic journey.
                </Typography>
                <Grid container spacing={6} sx={{ marginTop: '3rem' }}>
                    {reasons.map((reason, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <Paper
                                elevation={3}
                                sx={{
                                    padding: '2rem',
                                    backgroundColor: reason.background,
                                    color: 'white',
                                    borderRadius: '10px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1.5rem',
                                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-5px)',
                                        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                                    },
                                }}
                            >
                                <Box>{reason.icon}</Box>
                                <Box>
                                    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                                        {reason.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ marginTop: '1rem' }}>
                                        {reason.description}
                                    </Typography>
                                </Box>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default WhyDRCShalaSection;
