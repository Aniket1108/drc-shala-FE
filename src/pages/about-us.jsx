import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Grid, Typography, Box, Button, Stack, Card, Avatar, useTheme } from '@mui/material';
import { styled } from '@mui/system';
import aboutUsImg from "assets/images/landing/aboutUs.png"
import LeadershipCarousel from 'sections/landing/home/LeadershipCarousel'

import { Heart } from 'iconsax-react'

// Custom styles
const StyledImage = styled('img')(({ theme }) => ({
    width: '100%',
    height: 'auto',
    borderRadius: theme.shape.borderRadius,
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
    width: 120,
    height: 120,
    marginBottom: theme.spacing(3),
    border: `4px solid ${theme.palette.primary.main}`,
    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.1)',
}));

const StyledCard = styled(Card)(({ theme }) => ({
    padding: theme.spacing(4),
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '24px',
    background: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(20px)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transform: 'translateY(-10px)',
    },
}));

const teamMembers = [
    {
        name: "Nilesh Maher",
        role: "Founder & CEO",
        description: " Dear Students & Parent's, At Drcshala we empower students with top-quality education, preparing them NEET, JEE, and MHT-CET, while building strong foundation in classes 8-10. Our platform combines expert guidance and technology to foster curiosity, critical thinking, and academic excellence. Whether you are a student, instructor, or parent, we stand with you every step of the way to unlock and shape a brighter future!🚀"
    },
    {
        name: "Sagar Maher",
        role: "Co-Founder & COO",
        description: "Unlock your true potential with expert guidance, smart learning, and unwavering determination, while parents gain a trusted partner in shaping their child's future. Together, we create a supportive and inspiring environment that fosters confidence, excellence, and lifelong success."
    },
    {
        name: "Aniket Gholap",
        role: "Co-Founder & CTO",
        description: "Achieve your dreams with personalized learning, AI-powered progress tracking, and interactive learning tools to help students succeed. Parents receive clear student performance report. Together, we make inspire, grow, and succeed!"
    }
];

const AboutUs = () => {
    const theme = useTheme();
    const navigate = useNavigate()
    return (
        <Box sx={{ bgcolor: 'background.default', py: 8 }}>
            <Container>
                {/* Hero Section */}
                <Grid container spacing={6} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Box sx={{ display: 'inline-flex', alignItems: 'center', bgcolor: 'primary.50', p: 1, px: 2, borderRadius: 50, mb: 4 }}>
                            <Heart size={16} style={{ marginRight: 8, color: theme.palette.primary.main }} />
                            <Typography variant="body2" color="primary.main" fontWeight="medium">
                                Transforming Education
                            </Typography>
                        </Box>
                        <Typography variant="h2" component="h1" fontWeight="bold" gutterBottom>
                            Empowering the Next Generation of Leaders
                        </Typography>
                        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
                            Welcome to Drcshala! We're revolutionizing education by combining cutting-edge technology with expert guidance to help students excel in NEET, JEE, and MHT-CET examinations.
                        </Typography>
                        <Button
                            variant="contained"
                            size="large"
                            endIcon={'>'}
                            sx={{ borderRadius: 50, px: 4 }}
                        >
                            Get Started
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ position: 'relative' }}>
                            <Box
                                sx={{
                                    position: 'absolute',
                                    inset: 0,
                                    bgcolor: 'primary.light',
                                    borderRadius: '50%',
                                    filter: 'blur(80px)',
                                    opacity: 0.2,
                                }}
                            />
                            <Box
                                component="img"
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
                                alt="Students learning"
                                sx={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: 4,
                                    boxShadow: theme.shadows[20],
                                    position: 'relative',
                                }}
                            />
                        </Box>
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
                                    We provide students with a comprehensive earning platform that enhances conceptual clarity, fosters curiosity, and boost confidence.
                                    Empower instructors with advanced teaching tools, and build trust with parents through transparent progress tracking and reliable content.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 3 }}>
                                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                                    Vision
                                </Typography>
                                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                                    Our vision is to transform the way India learns by creating a world where every student, has access to top-quality education and resources.
                                    We aspire to bridge the educational gap and inspire millions to achieve their dreams through personalized, technology-driven learning experiences.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                <Box>
                    <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'text.primary', textAlign: 'center', mt: "120px" }}>
                        Our Leadership Team
                    </Typography>
                    <LeadershipCarousel />
                </Box>

                {/* Call to Action Section */}
            </Container>
            <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 10, mt: '50px' }}>
                <Container maxWidth="md" sx={{ textAlign: 'center' }}>
                    <Typography variant="h3" component="h2" fontWeight="bold" gutterBottom>
                        Ready to Begin Your Journey?
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 4, color: 'primary.50' }}>
                        Join thousands of students who are already transforming their future with Drcshala.
                    </Typography>
                    <Button
                        variant="contained"
                        size="large"
                        endIcon={'>'}
                        sx={{
                            bgcolor: 'white',
                            color: 'primary.main',
                            borderRadius: 50,
                            px: 4,
                            '&:hover': {
                                bgcolor: 'grey.100',
                            },
                        }}
                        onClick={() => { navigate('/register') }}
                    >
                        Start Learning Today
                    </Button>
                </Container>
            </Box>
        </Box>
    );
};

export default AboutUs;
