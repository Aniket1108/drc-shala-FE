import React from "react";
import { Card, CardContent, Container, Typography, List, ListItem, ListItemText } from "@mui/material";

const RefundPolicy = () => {
    return (
        <Container maxWidth="md" sx={{ py: 4 }}>
            <Typography variant="h4" gutterBottom>
                Refund Policy
            </Typography>
            <List>
                <ListItem>
                    <ListItemText
                        primary="No Refunds for Purchases"
                        secondary="All products and services purchased from us, including online batches, are non-refundable. Once a purchase is made, it is not eligible for a refund."
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Batch Change Requests"
                        secondary="If you accidentally purchase the wrong online batch or service, you may request to switch to another batch of the same amount within 10 days of purchase. Please contact us within this timeframe for assistance."
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Books and Products"
                        secondary="Before purchasing any books or physical products, we strongly recommend reviewing the full system and details to ensure it meets your needs. Once payment is made, no refunds will be issued for books unless the product is damaged or lost in transit by the courier."
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Damaged or Lost Products"
                        secondary="In case of damaged or lost products caused by our courier partner, you are entitled to a replacement. Please report any such issues promptly."
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Incorrect Address or Non-acceptance"
                        secondary="If the wrong address is provided or the books are not accepted by the student upon delivery, no refunds will be issued."
                    />
                </ListItem>
            </List>
        </Container>
    );
};

export default RefundPolicy;
