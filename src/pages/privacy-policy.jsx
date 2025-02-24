import React from "react";
import { Container, Typography, List, ListItem, ListItemText, Link } from "@mui/material";

const PrivacyPolicy = () => {
    return (
        <Container maxWidth="md" sx={{ py: 4 }}>
            <Typography variant="h4" gutterBottom>
                Privacy Policy
            </Typography>
            <Typography paragraph>
                Please read this Privacy Policy carefully before using the Drcshala Platform (including our Website at
                <Link href="https://www.drcshala.com" target="_blank" rel="noopener noreferrer"> www.drcshala.com</Link> and App).
                By using or accessing the Platform, you agree to be bound by this Privacy Policy. We may update this policy from time to time,
                and you should review it periodically to stay informed about how your information is collected, used, and protected.
                If you do not agree with the terms of this policy, please refrain from using our services.
            </Typography>

            <Typography variant="h5" gutterBottom>
                1. Collection of Personal Information
            </Typography>
            <Typography paragraph>
                We collect personal information to provide and enhance the services we offer on our Platform. The types of information we may collect include:
            </Typography>
            <List>
                <ListItem><ListItemText primary="Personal Details: Name, mobile number, email address, service address, demographic information." /></ListItem>
                <ListItem><ListItemText primary="Technical Information: Your IP address, device information, and network-related details." /></ListItem>
                <ListItem><ListItemText primary="Educational/Professional Information: College details, uploaded photo, and government-issued IDs." /></ListItem>
                <ListItem><ListItemText primary="Registration Information: Username, password, email, specialty, education details." /></ListItem>
                <ListItem><ListItemText primary="Third-Party Registration: If registering via Facebook, we access certain profile details." /></ListItem>
            </List>

            <Typography variant="h5" gutterBottom>
                2. Use of Personal Information
            </Typography>
            <List>
                <ListItem><ListItemText primary="Providing and Enhancing Services." /></ListItem>
                <ListItem><ListItemText primary="Communication: Account updates, promotions, and new features." /></ListItem>
                <ListItem><ListItemText primary="Customer Support: Issue resolution and assistance." /></ListItem>
                <ListItem><ListItemText primary="Customization and Personalization." /></ListItem>
                <ListItem><ListItemText primary="Security and Fraud Prevention." /></ListItem>
            </List>

            <Typography variant="h5" gutterBottom>
                3. Sharing of Personal Information
            </Typography>
            <List>
                <ListItem><ListItemText primary="Service Providers: Payment processors, marketing agencies." /></ListItem>
                <ListItem><ListItemText primary="Legal Requirements: Compliance with subpoenas, court orders." /></ListItem>
                <ListItem><ListItemText primary="Business Transactions: Mergers, acquisitions." /></ListItem>
                <ListItem><ListItemText primary="Advertising: Aggregate or anonymized data usage." /></ListItem>
            </List>

            <Typography variant="h5" gutterBottom>
                4. Information Security
            </Typography>
            <Typography paragraph>
                We take the security of your personal information seriously. Your data is stored on secure servers protected by encryption.
                While we implement various security measures, no system is completely secure.
            </Typography>

            <Typography variant="h5" gutterBottom>
                5. Your Choices and Opting Out
            </Typography>
            <List>
                <ListItem><ListItemText primary="Opting Out of Marketing Communications: Unsubscribe link in emails or contact support@drcshala.com." /></ListItem>
                <ListItem><ListItemText primary="Account Information: Update, correct, or delete your account by contacting support@drcshala.com." /></ListItem>
            </List>

            <Typography paragraph>
                All other terms and conditions as applicable under the
                <Link href="https://www.drcshala.com/" target="_blank" rel="noopener noreferrer"> Terms and Conditions of Use</Link>
                will be applicable to You and will be read along with this Privacy Policy.
            </Typography>
        </Container>
    );
};

export default PrivacyPolicy;
