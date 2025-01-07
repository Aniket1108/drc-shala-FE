import React from "react";
import { useParams } from 'react-router-dom';

import { Box, Grid, Typography, Button, Card, CardContent, List, ListItem, ListItemText, Divider, Container, Avatar, Chip } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

import getData from "./product_details/course_data"

const product_details = ({ type }) => {
    const { course } = useParams();
    const courseDetails = getData(type, course);

    return (
        <Container sx={{ padding: 4, marginTop: 8 }}>
            <Grid container spacing={4}>
                {/* Left Side: Offering Details */}
                <Grid item xs={12} md={8}>
                    <Box>
                        <Typography variant="h3" gutterBottom color="primary" fontWeight="bold">
                            {courseDetails.title}
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom color="text.secondary">
                            {courseDetails.description}
                        </Typography>
                    </Box>

                    <Box mt={4}>
                        <Typography variant="h6" gutterBottom color="text.primary">
                            Standards Available:
                        </Typography>
                        <Box>
                            {courseDetails.standards.map((standard, index) => (
                                <Chip
                                    key={index}
                                    label={standard}
                                    color="primary"
                                    sx={{ marginRight: 1, marginBottom: 1 }}
                                />
                            ))}
                        </Box>
                    </Box>

                    <Box mt={4}>
                        <Typography variant="h6" gutterBottom color="text.primary">
                            Subjects Included:
                        </Typography>
                        <Box>
                            {courseDetails.subjects.map((subject, index) => (
                                <Chip
                                    key={index}
                                    label={subject}
                                    variant="outlined"
                                    sx={{ marginRight: 1, marginBottom: 1 }}
                                />
                            ))}
                        </Box>
                    </Box>

                    <Box mt={4}>
                        <Typography variant="h6" gutterBottom color="text.primary">
                            What you'll get:
                        </Typography>
                        <List>
                            {courseDetails.offerings.map((offering, index) => (
                                <ListItem key={index} alignItems="flex-start">
                                    <Avatar sx={{ bgcolor: "primary.main", marginRight: 2 }}>
                                        <LocalOfferIcon />
                                    </Avatar>
                                    <ListItemText
                                        primary={<Typography variant="subtitle1" fontWeight="bold">{offering.title}</Typography>}
                                        secondary={<Typography variant="body2" color="text.secondary">{offering.description}</Typography>}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Grid>

                {/* Right Side: Checkout */}
                <Grid item xs={12} md={4}>
                    <Card elevation={4} sx={{ borderRadius: 2 }}>
                        <CardContent>
                            <Typography variant="h5" gutterBottom color="text.primary">
                                Price Details
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{ textDecoration: "line-through", color: "gray" }}
                            >
                                ₹{courseDetails.price}
                            </Typography>
                            <Typography variant="h3" color="secondary" fontWeight="bold" gutterBottom>
                                ₹{courseDetails.discountedPrice}
                            </Typography>
                            <Divider sx={{ marginY: 2 }} />
                            <Button
                                variant="contained"
                                color="secondary"
                                fullWidth
                                size="large"
                                startIcon={<ShoppingCartIcon />}
                            >
                                Buy Now
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default product_details;