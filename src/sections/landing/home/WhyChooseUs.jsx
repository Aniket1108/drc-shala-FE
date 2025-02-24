import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

import ProvenResults from 'assets/images/landing/provenResults.gif'
import ExperFauclty from 'assets/images/landing/expertFaculty.gif'
import Progress from 'assets/images/landing/progress.gif'
import Support from 'assets/images/landing/support.gif'

const WhyDRCShalaSection = () => {
    const reasons = [
        {
            title: 'Expert Instructors',
            description: 'Learn from experienced educators who are experts in their respective fields and have a track record of student success.',
            icon: <img src={ExperFauclty} width='40px' />,
            background: '#6a11cb',
        },
        {
            title: 'Proven Results',
            description: 'Our students consistently achieve top ranks in competitive exams like NEET, JEE, MHT-CET, and more.',
            icon: <img src={ProvenResults} width='40px' />,
            background: '#43cea2',
        },
        {
            title: '24/7 Support',
            description: 'Get uninterrupted access to personalized guidance and help from our support team, ensuring a smooth learning experience.',
            icon: <img src={Support} width='40px' />,
            background: '#ff758c',
        },
        {
            title: 'Track Progress',
            description: 'Monitor your progress with detailed reports and analytics that help you stay on track and improve your performance.',
            icon: <img src={Progress} width='40px' />,
            background: '#ff7eb3',
        },
    ];

    return (
        <Box sx={{ padding: '3rem 0', backgroundColor: '#f9f9f9' }}>
            <Container maxWidth="lg">
                <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Why Choose Drcshala?
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" gutterBottom>
                    Discover the benefits of learning with us and see how we help you succeed in your academic journey.
                </Typography>

                {/* Horizontal Scrollable Container */}
                <Box
                    sx={{
                        display: 'flex',
                        gap: '1.5rem',
                        overflowX: 'auto',
                        whiteSpace: 'nowrap',
                        padding: '1rem 0',
                        '&::-webkit-scrollbar': {
                            height: '8px',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            backgroundColor: '#888',
                            borderRadius: '4px',
                        },
                        '&::-webkit-scrollbar-track': {
                            backgroundColor: '#f1f1f1',
                        },
                    }}
                >
                    {reasons.map((reason, index) => (
                        <Box
                            key={index}
                            sx={{
                                position: 'relative',
                                minWidth: '280px',
                                maxWidth: '280px',
                                flex: '0 0 auto',
                                paddingTop: '2rem', // Add space for the icon
                            }}
                        >
                            {/* Icon positioned half above the box */}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: '0', // Move icon half above the box
                                    left: '20px',
                                    zIndex: 1,
                                    // borderRadius: '50%',
                                    padding: '0.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                                }}
                            >
                                {reason.icon}
                            </Box>
                            <Paper
                                elevation={3}
                                sx={{
                                    padding: '12px',
                                    height: '190px',
                                    // backgroundColor: '#f5f5f5', // Grey background
                                    color: '#333',
                                    borderRadius: '10px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    wordWrap: 'break-word',
                                    overflow: 'hidden',
                                    '&:hover': {
                                        transform: 'translateY(-5px)',
                                        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                                    },
                                }}
                            >
                                <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1rem', mt: 3 }}>
                                    {reason.title}
                                </Typography>
                                <Typography variant="body2" sx={{ marginTop: '0.5rem', fontSize: '0.875rem', whiteSpace: 'normal' }}>
                                    {reason.description}
                                </Typography>
                            </Paper>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default WhyDRCShalaSection;