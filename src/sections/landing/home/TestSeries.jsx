import React from 'react';
import { Box, Typography, Button, Container, Stack } from '@mui/material';
import ScienceIcon from 'assets/images/landing/healthcare.gif';
import EngineeringIcon from 'assets/images/landing/helmet.gif';
import SchoolIcon from 'assets/images/landing/online-degree.gif';
import TestSeries from 'assets/images/landing/testSeries.png'

const TestSeriesSection = () => {
    const streams = [
        {
            title: 'NEET',
            description: 'Master Biology, Physics, and Chemistry with our comprehensive test series, designed to help aspiring medical students excel with detailed performance insights 📊.',
            icon: ScienceIcon,
            gradient: 'linear-gradient(135deg, #ff758c, #ff7eb3)', // Pink-Red
            link: '/test-series/neet',
        },
        {
            title: 'JEE',
            description: 'Ace your JEE Mains & Advanced with our tailored test series, featuring in-depth Physics, Chemistry, and Mathematics practice 🚀.',
            icon: EngineeringIcon,
            gradient: 'linear-gradient(135deg, #6a11cb, #2575fc)', // Purple-Blue
            link: '/test-series/jee',
        },
        {
            title: 'MHT-CET',
            description: 'Get exam-ready for MHT-CET with mock tests covering Physics, Chemistry, and Mathematics/Biology, designed to boost your performance 🎯📊.',
            icon: SchoolIcon,
            gradient: 'linear-gradient(135deg, #43cea2, #185a9d)', // Green-Blue
            link: '/test-series/mht-cet',
        },
    ];

    return (
        <Box sx={{ padding: '4rem 0', backgroundColor: '#ffffff' }}>
            <Container maxWidth="lg">
                <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Test Series
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" gutterBottom>
                    Unlock your potential with our expertly designed Test-Series tailored for your success.
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' }, // Stack on mobile, side-by-side on desktop
                        alignItems: 'center',
                        marginTop: '2rem',
                    }}
                >
                    {/* Left Side: Stack of Streams */}
                    <Stack spacing={3} sx={{ flex: 1 }}>
                        {streams.map((stream, index) => (
                            <Box
                                key={index}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '2rem',
                                    // background: stream.gradient,
                                    borderRadius: '12px',
                                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)',
                                    padding: '1.5rem',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-5px)',
                                        boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
                                    },
                                }}
                            >
                                <img src={stream.icon} alt={stream.icon} width="50px" />
                                <Box>
                                    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                                        {stream.title}
                                    </Typography>
                                    <Typography variant="body2">{stream.description}</Typography>
                                    <Button
                                        variant="contained"
                                        href={stream.link}
                                        sx={{
                                            marginTop: '5px',
                                            borderRadius: '20px',
                                        }}
                                    >
                                        Explore {stream.title}
                                    </Button>
                                </Box>
                            </Box>
                        ))}
                    </Stack>

                    {/* Right Side: Image */}
                    <Box
                        sx={{
                            flex: 1,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: { xs: '2rem', md: '0' },
                        }}
                    >
                        <img
                            src={TestSeries}
                            alt="Education Related"
                            style={{
                                width: '100%',
                                maxWidth: '400px',
                            }}
                        />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default TestSeriesSection;
