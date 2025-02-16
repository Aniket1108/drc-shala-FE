import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import BookIcon from '@mui/icons-material/Book';
import SchoolIcon from '@mui/icons-material/School';
import ScienceIcon from '@mui/icons-material/Science';


const CoursesSection = () => {
    const courses = [

        {
            title: 'NEET Preparation',
            description: '🚀Your NEET success starts here! Get expert-led courses, in-depth concept clarity, and strategic guidance to turn your medical dreams into reality. Practice. Improve. Succeed🩺📚.',
            icon: <ScienceIcon sx={{ fontSize: 50, color: 'white' }} />,
            gradient: 'linear-gradient(135deg, #ff758c, #ff7eb3)', // Pink-Red
            link: '/course/neet',
        },
        {
            title: 'JEE Preparation',
            description: '🚀Premier courses for aspiring engineers, covering Physics, Chemistry, and Mathematics, taught by the best faculty to ensure your success⚙️📚.',
            icon: <LaptopMacIcon sx={{ fontSize: 50, color: 'white' }} />,
            gradient: 'linear-gradient(135deg, #43cea2, #185a9d)', // Green-Blue
            link: '/course/jee',
        },
        {
            title: 'MHT-CET Preparation',
            description: '🚀Expert-designed courses for MHT-CET, covering Physics, Chemistry, and Mathematics/Biology, to help you excel in Maharashtra’s state-level exam💻📚.',
            icon: <SchoolIcon sx={{ fontSize: 50, color: 'white' }} />,
            gradient: 'linear-gradient(135deg, #ff9966, #ff5e62)', // Orange-Red
            link: '/course/mht-cet',
        },
        {
            title: 'Foundation 8-10',
            description: '🚀Build a strong foundation with expert-crafted courses designed to enhance learning, boost confidence, and ensure academic success🎯📚.',
            icon: <BookIcon sx={{ fontSize: 50, color: 'white' }} />,
            gradient: 'linear-gradient(135deg, #6a11cb, #2575fc)', // Purple-Blue
            link: '/course/foundation',
        },
    ];

    return (
        <Box sx={{ padding: '4rem 0', backgroundColor: '#f9f9f9' }}>
            <Container maxWidth="lg">
                <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Our Courses
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" gutterBottom>
                    📚 Discover courses designed to fit your learning journey! 🚀
                </Typography>
                <Grid container spacing={6} sx={{ marginTop: '2rem' }}>
                    {courses.map((course, index) => (
                        <Grid
                            item
                            xs={12}
                            md={6}
                            sx={{
                                display: 'flex',
                                flexDirection: index % 2 === 0 ? 'row-reverse' : 'row', // Zigzag pattern
                                alignItems: 'center',
                                gap: '1.5rem',
                            }}
                            key={index}
                        >
                            {/* Icon Section */}
                            <Box
                                sx={{
                                    flexShrink: 0,
                                    width: '100px',
                                    height: '100px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: '50%',
                                    background: course.gradient,
                                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)',
                                }}
                            >
                                {course.icon}
                            </Box>
                            {/* Content Section */}
                            <Box>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontWeight: 'bold',
                                        background: course.gradient,
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                    }}
                                >
                                    {course.title}
                                </Typography>
                                <Typography variant="body1" color="textSecondary" sx={{ marginY: '1rem' }}>
                                    {course.description}
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    href={course.link}
                                    sx={{
                                        background: course.gradient,
                                        borderRadius: '20px',
                                        color: 'white',
                                        '&:hover': {
                                            opacity: 0.9,
                                        },
                                    }}
                                >
                                    Learn More
                                </Button>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default CoursesSection;
