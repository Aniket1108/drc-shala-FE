import { useState, useEffect } from 'react';
import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';

const LeadershipCarousel = () => {
    const [index, setIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const teamMembers = [
        {
            name: "Nilesh Maher",
            role: "Founder & CEO",
            description: "“Dear Students & Parent's, At Drcshala we empower students with top-quality education, preparing them NEET, JEE, and MHT-CET, while building strong foundation in classes 8-10. Our platform combines expert guidance and technology to foster curiosity, critical thinking, and academic excellence. Whether you are a student, instructor, or parent, we stand with you every step of the way to unlock and shape a brighter future!🚀”"
        },
        {
            name: "Sagar Maher",
            role: "Co-Founder & COO",
            description: "“Unlock your true potential with expert guidance, smart learning, and unwavering determination, while parents gain a trusted partner in shaping their child's future. Together, we create a supportive and inspiring environment that fosters confidence, excellence, and lifelong success.”"
        },
        {
            name: "Aniket Gholap",
            role: "Co-Founder & CTO",
            description: "“Achieve your dreams with personalized learning, AI-powered progress tracking, and interactive learning tools to help students succeed. Parents receive clear student performance report. Together, we make inspire, grow, and succeed!”"
        }
    ];

    useEffect(() => {
        if (!isHovered) {
            const interval = setInterval(() => {
                setIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
            }, 3000); // Slide every 3 seconds
            return () => clearInterval(interval);
        }
    }, [isHovered]);

    return (
        <Box sx={{
            minHeight: '300px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            background: 'rgba(255, 255, 255, 0.1)', // Light transparent background
            backdropFilter: 'blur(10px)',
        }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
            >
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: "primary.main" }}>
                    {teamMembers[index].name} - {teamMembers[index].role}
                </Typography>
                <Typography variant="h5" sx={{ fontStyle: 'italic', color: 'text.secondary', fontSize: "1.5rem" }}>
                    {teamMembers[index].description}
                </Typography>
            </motion.div>
        </Box>
    );
};

export default LeadershipCarousel;
