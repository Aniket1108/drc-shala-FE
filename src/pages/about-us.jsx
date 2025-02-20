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
    const navigate = useNavigate()
    return (
        <Box sx={{ bgcolor: 'background.default', py: 8, pt: "150px" }}>
            <Container>
                {/* Hero Section */}
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                            About Drcshala
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
                            Welcome to Drcshala! A platform dedicated to revolutionizing education by empowering students, supporting instructors,
                            and building trust with parents. Our vision is to help students excel in NEET, JEE, and MHT-CET through top-notch guidance and resources.
                            We lay a strong academic foundation for students in classes 8, 9, and 10 with our comprehensive courses.

                            <br /> <br />
                            Beyond academics, we foster holistic growth, character development, and a lifelong passion for learning. Our mission is to make quality
                            education accessible, affordable, and impactful for every student. We combine innovative technology with expert educators to nurture
                            future leaders and changemakers.
                            <br /> <br />
                            At Drcshala, we are committed to transforming learning and unlocking every student’s potential! 🚀

                        </Typography>
                        <Button variant="contained" color="primary" size="large">
                            Learn More
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <StyledImage src={aboutUsImg} alt="About Drcshala" />
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
                        Join Drcshala today and take the first step towards success.
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
