import React, { useEffect, useState } from "react";
import { useParams, useLocation } from 'react-router-dom';

import { Box, Grid, Typography, Button, Card, CardContent, List, ListItem, ListItemText, Divider, Container, Avatar, Chip, Radio } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

import { useHttp } from 'src/utils/api_intercepters.js';

const product_details = () => {
    const useHttpMethod = useHttp()
    const location = useLocation();

    const { product_id } = useParams();
    const [courseDetails, setCourseDetails] = useState({})

    useEffect(() => {
        useHttpMethod.get("/app/product/details?product_id=" + product_id).then((res) => {
            if (res.statusCode == 200) {
                setCourseDetails(res.data)
            } else {
                alert(res.message)
            }
        })
    }, [])

    const userData = JSON.parse(localStorage.getItem('userData'));

    const handlePayment = (e, data) => {
        try {
            const options = {
                "key": data.razorpay_key_id,
                "amount": data.order_amount,
                "currency": "INR",
                "name": "Drcshala",
                "description": "Test Series Transaction",
                "image": "https://example.com/your_logo",
                "order_id": data.razorpay_order_id,
                "handler": async function (response) {
                    alert(response.razorpay_order_id);
                },
                "prefill": {
                    "name": userData?.firstName,
                    "email": userData?.email || '',
                    "contact": userData?.mobileNumber
                },
                "notes": {},
                "theme": { "color": "#3399cc" }
            };

            var rzp1 = new window.Razorpay(options);

            rzp1.open();
            rzp1.on('payment.failed', function (response) {
                console.log(response)
            });

            e.preventDefault();
        } catch (err) {
            console.log(err)
        }
    }

    const createOrder = (e, productId) => {
        console.log("caread")
        useHttpMethod.post("/app/product/create-order", {
            "productId": productId
        }).then((res) => {
            if (res.statusCode == 200) {
                handlePayment(e, res.data)
            }
        })
    }


    return (
        <>
            <Container sx={{ padding: 2, mt: "120px" }}>
                <Grid container spacing={4}>
                    {/* Left Side: Offering Details */}
                    <Grid item xs={12} md={8}>
                        <Box>
                            <Typography variant="h3" gutterBottom color="primary" fontWeight="bold">
                                {courseDetails?.details?.title}
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom color="text.secondary">
                                {courseDetails?.details?.description}
                            </Typography>
                        </Box>

                        <Box mt={4}>
                            <Typography variant="h6" gutterBottom color="text.primary">
                                Subjects Included:
                            </Typography>
                            <Box>
                                {courseDetails?.details?.subjects?.map((subject, index) => (
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
                                {courseDetails?.details?.offerings?.map((offering, index) => (
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
                    <Grid item xs={12} md={4} sx={{ p: 0 }}>
                        <Card elevation={4} sx={{ borderRadius: 2 }} >
                            <CardContent sx={{ p: "15px" }}>
                                <Typography variant="h5" gutterBottom color="text.primary">
                                    Price Details
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{ textDecoration: "line-through", color: "gray" }}
                                >
                                    ₹{courseDetails?.product_price}
                                </Typography>
                                <Typography variant="h3" color="secondary" fontWeight="bold" gutterBottom>
                                    ₹{courseDetails?.product_offer_price}
                                </Typography>

                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>

                                    <Radio
                                        size="small"
                                        checked
                                    />

                                    <Typography>{courseDetails?.start_time && formatDate(courseDetails?.start_time)}</Typography>
                                </Box>

                                <Divider sx={{ marginY: 2 }} />
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    fullWidth
                                    size="large"
                                    startIcon={<ShoppingCartIcon />}
                                    onClick={(e) => { createOrder(e, product_id) }}
                                >
                                    Buy now
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getUTCDate();
    const suffix = ['th', 'st', 'nd', 'rd'][(day % 10 < 4 && (day % 100 < 10 || day % 100 > 20)) ? day % 10 : 0];
    return `${day}${suffix} ${date.toLocaleString('en-US', { month: 'long', timeZone: 'UTC' })} ${date.getUTCFullYear()}`;
};

export default product_details;