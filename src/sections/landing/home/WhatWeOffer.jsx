import React from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import { Book1, Profile2User, ClipboardText, Calendar } from "iconsax-react";
// import Image from "next/image";
// import "./FeaturesSection.css";

import Courses from "assets/images/landing/courses.jpg"
import TestSeries from "assets/images/landing/testSeries.jpg"
import StudyMaterials from "assets/images/landing/studyMaterials.jpg"

const features = [
    {
        title: "Comprehensive Courses",
        description:
            "Master NEET, JEE, and MHT-CET with structured learning paths. Gain conceptual clarity with expert-designed courses, live classes, and interactive study materials.",
        buttonText: "Explore Courses",
        link: "/courses",
        icon: <Book1 size={50} color="#fff" variant="Bold" />,
        image: <img src={Courses} alt={'course'} width={500} height={350} style={{ borderRadius: 12, width: "100%", height: "auto" }} />,
    },
    {
        title: "Real Exam Experience",
        description:
            "Boost confidence with our test series, designed to mimic real exams. Get detailed performance insights and personalized feedback for continuous improvement.",
        buttonText: "Take a Test",
        link: "/test-series",
        icon: <ClipboardText size={50} color="#fff" variant="Bold" />,
        image: <img src={TestSeries} alt={'TestSeries'} width={500} height={350} style={{ borderRadius: 12, width: "100%", height: "auto" }} />,
    },
    {
        title: "Expert Study Materials",
        description:
            "Access top-notch study resources curated by subject matter experts. Simplify complex topics and enhance retention with high-quality content and practice problems.",
        buttonText: "View Materials",
        link: "/study-materials",
        icon: <Profile2User size={50} color="#fff" variant="Bold" />,
        image: <img src={StudyMaterials} alt={'StudyMaterials'} width={500} height={350} style={{ borderRadius: 12, width: "100%", height: "auto" }} />,
    }
];

const FeaturesSection = () => {
    return (
        <Box sx={{ py: 8, mt: "80px" }}>
            <Container maxWidth="lg">
                <Typography
                    variant="h4"
                    align="center"
                    fontWeight="bold"
                    gutterBottom
                >
                    What We Offer
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="textSecondary"
                    gutterBottom
                    sx={{ mb: "48px" }}
                >
                    Transform your learning with our expert-designed courses, tests, and resources.
                </Typography>

                {features.map((feature, index) => (
                    <div key={index} className="feature-container fade-in-up">
                        <Grid
                            container
                            spacing={4}
                            alignItems="center"
                            flexDirection={index % 2 === 0 ? "row" : "row-reverse"}
                        // sx={{ mt: 6 }}
                        >
                            <Grid item xs={12} md={6}>
                                {feature.image}
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                                    <Box sx={{ mb: 1 }}>{feature.icon}</Box>
                                    <Typography variant="h5" fontWeight="bold" gutterBottom>
                                        {feature.title}
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary" gutterBottom>
                                        {feature.description}
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        href={feature.link}
                                        sx={{ mt: 1, mb: 4, borderRadius: "20px" }}
                                    >
                                        {feature.buttonText}
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </div>
                ))}
            </Container>
        </Box>
    );
};

export default FeaturesSection;