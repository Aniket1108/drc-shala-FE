import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import AssessmentIcon from '@mui/icons-material/Assessment';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import EventIcon from '@mui/icons-material/Event';

const FeaturesSection = () => {
    const features = [
        {
            title: 'Courses',
            description: 'Explore courses for grades 6-10 and competitive exams like NEET, JEE, and MHT CET.',
            buttonText: 'View Courses',
            link: '/courses',
            icon: <SchoolIcon sx={{ fontSize: 50, color: 'white' }} />,
            gradient: 'linear-gradient(135deg, #6a11cb, #2575fc)', // Purple-Blue
        },
        {
            title: 'Test Series',
            description: 'Attempt test series with detailed performance reports and expert-designed papers.',
            buttonText: 'Take a Test',
            link: '/test-series',
            icon: <AssessmentIcon sx={{ fontSize: 50, color: 'white' }} />,
            gradient: 'linear-gradient(135deg, #ff758c, #ff7eb3)', // Pink-Red
        },
        {
            title: 'Study Materials',
            description: 'Access curated PDFs, notes, and resources for effective preparation.',
            buttonText: 'Explore Materials',
            link: '/study-materials',
            icon: <MenuBookIcon sx={{ fontSize: 50, color: 'white' }} />,
            gradient: 'linear-gradient(135deg, #43cea2, #185a9d)', // Green-Blue
        },
        {
            title: 'Book a Demo',
            description: 'Schedule a demo session to experience the platform features.',
            buttonText: 'Book Now',
            link: '/book-demo',
            icon: <EventIcon sx={{ fontSize: 50, color: 'white' }} />,
            gradient: 'linear-gradient(135deg, #ff9966, #ff5e62)', // Orange-Red
        },
    ];

    return (
        <Box sx={{ padding: '4rem 0' }}>
            <Container maxWidth="lg">
                <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
                    What We Offer
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" gutterBottom>
                    Choose from our range of services designed to boost your learning journey.
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        overflowX: 'auto',
                        gap: '1.5rem',
                        marginTop: '2rem',
                        paddingBottom: '1rem',
                        '&::-webkit-scrollbar': {
                            height: '8px',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            background: '#aaa',
                            borderRadius: '4px',
                        },
                        '&::-webkit-scrollbar-thumb:hover': {
                            background: '#888',
                        },
                    }}
                >
                    {features.map((feature, index) => (
                        <Box
                            key={index}
                            sx={{
                                minWidth: '260px',
                                maxWidth: '350px',
                                background: feature.gradient,
                                borderRadius: '12px',
                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)',
                                padding: '1rem',
                                textAlign: 'center',
                                flexShrink: 0,
                                color: 'white',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-5px)',
                                    boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
                                },
                            }}
                        >
                            <Box sx={{ marginBottom: '0.5rem' }}>{feature.icon}</Box>
                            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                                {feature.title}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                {feature.description}
                            </Typography>
                            <Button
                                variant="contained"
                                color="secondary"
                                href={feature.link}
                                sx={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                    color: 'white',
                                    borderRadius: '20px',
                                    '&:hover': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.4)',
                                    },
                                }}
                            >
                                {feature.buttonText}
                            </Button>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default FeaturesSection;
