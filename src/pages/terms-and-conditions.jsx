import React from "react";
import { Container, Typography, List, ListItem, ListItemText } from "@mui/material";

const PrivacyPolicy = () => {
    return (
        <Container maxWidth="md" sx={{ py: 4 }}>
            <Typography variant="h4" gutterBottom>
                Terms and Conditions
            </Typography>
            <Typography variant="body1" paragraph>
                This Terms and conditions how we collect, use, and protect the personal information of users interacting with the 'Drcshala' platform, which includes the Drcshala YouTube Channel, Website (www.Drcshala.com), and all related services. By accessing and using the platform, you consent to the collection, use, and processing of your personal data as described in this policy.
            </Typography>
            <Typography variant="h5" gutterBottom>
                Collection of Information
            </Typography>
            <List>
                <ListItem><ListItemText primary="Basic Information: Name, age, and contact details (email, phone number), etc." /></ListItem>
                <ListItem><ListItemText primary="Location: Your geographical location may be collected through the services." /></ListItem>
                <ListItem><ListItemText primary="Educational Information: Information related to your academic background, current studies, or areas of interest." /></ListItem>
                <ListItem><ListItemText primary="Usage Data: Information about your interactions with our platform, such as browsing behavior and preferences." /></ListItem>
            </List>
            <Typography variant="h5" gutterBottom>
                Use of Information
            </Typography>
            <List>
                <ListItem><ListItemText primary="Service Provision: To deliver the requested services and content on our platform." /></ListItem>
                <ListItem><ListItemText primary="Communication: To send notifications, updates, and information related to your account or our offerings." /></ListItem>
                <ListItem><ListItemText primary="Personalization: To customize your experience based on your preferences, location, and educational interests." /></ListItem>
                <ListItem><ListItemText primary="Marketing: To send promotional content, newsletters, or other marketing materials. You can opt out of these communications at any time." /></ListItem>
                <ListItem><ListItemText primary="Security and Fraud Prevention: To enhance the security of our platform and prevent fraudulent activities." /></ListItem>
                <ListItem><ListItemText primary="Customer Support: To respond to your inquiries, resolve issues, and improve our services based on feedback." /></ListItem>
                <ListItem><ListItemText primary="Analytics: To monitor platform usage and assess performance, helping us improve features and user experience." /></ListItem>
            </List>
            <Typography variant="h5" gutterBottom>
                Cookies
            </Typography>
            <Typography variant="body1" paragraph>
                We use cookies to enhance your browsing experience on our platform. Cookies are small text files that are stored on your device to help remember your preferences, login information, and browsing history. Cookies also allow us to analyze usage patterns and improve our platform. You can control cookies by adjusting your browser settings, but disabling cookies may impact the functionality of certain features on the platform.
            </Typography>
            <Typography variant="h5" gutterBottom>
                Sharing Information
            </Typography>
            <Typography variant="body1" paragraph>
                We may share your information with our service providers who help us manage, enhance, and secure our platform. These services may include:
            </Typography>
            <List>
                <ListItem><ListItemText primary="Marketing and Advertising: To help us send targeted promotions or advertisements." /></ListItem>
                <ListItem><ListItemText primary="Payment Processing: To handle transactions and billing if applicable." /></ListItem>
                <ListItem><ListItemText primary="Customer Support: For providing technical or customer service assistance." /></ListItem>
            </List>
            <Typography variant="body1" paragraph>
                These service providers are required to keep your information confidential and can only use it for tasks related to the services they provide. We do not sell or rent your personal data to third parties for their marketing purposes.
            </Typography>
            <Typography variant="h5" gutterBottom>
                Information Security
            </Typography>
            <Typography variant="body1" paragraph>
                We are committed to protecting your personal information and use appropriate security measures to safeguard it. We implement:
            </Typography>
            <List>
                <ListItem><ListItemText primary="Encryption: To protect sensitive data during transmission." /></ListItem>
                <ListItem><ListItemText primary="Access Control: Limiting access to your information to authorized personnel only." /></ListItem>
                <ListItem><ListItemText primary="Regular Audits: To ensure our security practices are up to date and effective." /></ListItem>
            </List>
            <Typography variant="body1" paragraph>
                Despite our best efforts, no method of data transmission or storage is 100% secure, so we cannot guarantee absolute protection of your information. However, we will notify you in the event of any significant data breach that may affect you.
            </Typography>
            <Typography variant="h5" gutterBottom>
                Public Forums
            </Typography>
            <Typography variant="body1" paragraph>
                Any personal information shared in public areas such as comments, forums, photos, or messages etc. on our platform may be visible to other users. We encourage you to be cautious when sharing personal details in these areas. Remember that once information is posted publicly, it may be difficult to remove.
            </Typography>
            <Typography variant="h5" gutterBottom>
                User Control
            </Typography>
            <List>
                <ListItem><ListItemText primary="Update Preferences: Modify the types of notifications or communications you receive." /></ListItem>
                <ListItem><ListItemText primary="Opt-Out: Unsubscribe from marketing emails or other promotional materials." /></ListItem>
                <ListItem><ListItemText primary="Request Access: Request a copy of the personal information we have collected about you." /></ListItem>
                <ListItem><ListItemText primary="Request Deletion: Ask for your personal data to be removed from our records (subject to certain legal conditions)." /></ListItem>
            </List>
            <Typography variant="h5" gutterBottom>
                Ownership of Rights
            </Typography>
            <Typography variant="body1" paragraph>
                All content, including but not limited to text, graphics, videos, logos, and trademarks on our website or YouTube channel, is owned or licensed by us. You may access this content for personal, non-commercial use, but you may not modify, distribute, or use it for any commercial purposes without obtaining explicit written permission from us.
            </Typography>
        </Container>
    );
};

export default PrivacyPolicy;
