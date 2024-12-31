import React from 'react';
import { Container, Grid, Typography, Box, Table, TableHead, TableRow, TableCell, TableBody, Button, Card, CardContent } from '@mui/material';

const JEECoursePage = () => {
    return (
        <Box sx={{ py: 8, bgcolor: 'background.default', pt: "150px" }}>
            <Container>
                {/* Header Section */}
                <Box sx={{ mb: 6, textAlign: 'center' }}>
                    <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                        JEE Main Exam Pattern
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                        Marking Scheme, Syllabus, Date, and Time
                    </Typography>
                </Box>

                {/* Overview Section */}
                <Box sx={{ mb: 8 }}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                                Exam Overview
                            </Typography>
                            <Typography variant="body1" paragraph>
                                The National Testing Agency (NTA) will administer the JEE Main exam in two sessions: January and April.
                                Understanding the exam pattern is crucial for successful preparation. The exam is held in two shifts: morning
                                and evening, with 75 questions totaling 300 marks.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Each topic comprises 20 multiple-choice questions (MCQs) and 5 numerical value questions (NVQs).
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                                        Exam Highlights
                                    </Typography>
                                    <Table>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell><strong>Exam Mode</strong></TableCell>
                                                <TableCell>Computer-based (Online)</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell><strong>Subjects</strong></TableCell>
                                                <TableCell>Physics, Chemistry, Mathematics</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell><strong>Duration</strong></TableCell>
                                                <TableCell>180 Minutes</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell><strong>Total Marks</strong></TableCell>
                                                <TableCell>300</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell><strong>Language Mediums</strong></TableCell>
                                                <TableCell>English, Hindi, Bengali, and others</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>

                {/* Subject-wise Distribution Section */}
                <Box sx={{ mb: 8 }}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4, textAlign: 'center' }}>
                        Subject-wise Marking Scheme
                    </Typography>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell><strong>Subject</strong></TableCell>
                                <TableCell>Number of MCQs</TableCell>
                                <TableCell>Number of NVQs</TableCell>
                                <TableCell>Total Marks</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>Physics</TableCell>
                                <TableCell>20</TableCell>
                                <TableCell>5</TableCell>
                                <TableCell>100</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Chemistry</TableCell>
                                <TableCell>20</TableCell>
                                <TableCell>5</TableCell>
                                <TableCell>100</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Mathematics</TableCell>
                                <TableCell>20</TableCell>
                                <TableCell>5</TableCell>
                                <TableCell>100</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Box>

                {/* Marking Scheme Section */}
                <Box sx={{ mb: 8 }}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4, textAlign: 'center' }}>
                        Marking Scheme
                    </Typography>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                                Multiple Choice Questions (MCQs)
                            </Typography>
                            <Typography variant="body1" paragraph>
                                - Correct Answer: +4 Marks<br />
                                - Incorrect Answer: -1 Mark<br />
                                - Unanswered: No Marks<br />
                                - If the question is incorrect or dropped: Full marks for all candidates.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                                Numerical Value Questions (NVQs)
                            </Typography>
                            <Typography variant="body1" paragraph>
                                - Correct Answer: +4 Marks<br />
                                - Incorrect Answer: -1 Mark<br />
                                - Unanswered: No Marks<br />
                                - Use constants provided and round off answers to the nearest integer.
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>

                {/* Exam Guidelines Section */}
                <Box sx={{ mb: 8 }}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4, textAlign: 'center' }}>
                        Exam Day Guidelines
                    </Typography>
                    <Typography variant="body1" paragraph>
                        - Carry admit cards, ID proof, and a recent passport-size photograph.<br />
                        - Geometry sets are required for Paper II.<br />
                        - Transparent hand sanitizers are allowed.<br />
                        - Electronic gadgets are prohibited.<br />
                        - Maintain social distancing and follow exam hall instructions.
                    </Typography>
                </Box>

                {/* Call to Action */}
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                        Ready to Start Your JEE Journey?
                    </Typography>
                    <Button variant="contained" color="primary" size="large" href="/contact">
                        Get Started
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default JEECoursePage;
