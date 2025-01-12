import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Grid, Typography, Box, Button, Stack, Card, Avatar } from '@mui/material';
import { styled } from '@mui/system';
import aboutUsImg from "assets/images/landing/aboutUs.png"

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
        description: "With over a decade of experience in education, our CEO believes in creating an education system that nurtures critical thinking and practical skills while maintaining academic excellence."
    },
    {
        name: "Sagar Maher",
        role: "Co-Founder & COO",
        description: "Dedicated to making quality education accessible to all, our CMO champions the cause of affordable education, ensuring financial constraints never limit one's access to learning."
    },
    {
        name: "Aniket Gholap",
        role: "Co-Founder & CTO",
        description: "As an expert in educational psychology, our CTO specializes in creating effective mentorship programs and building sustainable learning communities where students can thrive."
    }
];

const AboutUs = () => {
    const navigate = useNavigate()
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


                <Container sx={{ py: 10 }}>
                    <Typography
                        variant="h4"
                        align="center"
                        gutterBottom
                        sx={{
                            mb: 6,
                            background: 'linear-gradient(135deg, #1e40af 0%, #5b21b6 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Our Leadership Team
                    </Typography>

                    <Grid container spacing={4}>
                        {teamMembers.map((member, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <StyledCard>
                                    <StyledAvatar src={""} />
                                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
                                        {member.name}
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        gutterBottom
                                        sx={{
                                            color: 'primary.main',
                                            fontWeight: 600,
                                            mb: 0.5,
                                        }}
                                    >
                                        {member.role}
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: 'text.secondary', textAlign: 'center' }}>
                                        {member.description}
                                    </Typography>
                                </StyledCard>
                            </Grid>
                        ))}
                    </Grid>
                </Container>

                {/* Call to Action Section */}
                <Box sx={{ mt: 8, textAlign: 'center' }}>
                    <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                        Ready to Achieve Your Dreams?
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
                        Join DRC Shala today and take the first step towards success.
                    </Typography>
                    <Button variant="contained" color="primary" size="large" onClick={() => {
                        navigate("/")
                    }}>
                        Get Started
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default AboutUs;
