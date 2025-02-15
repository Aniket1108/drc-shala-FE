import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import {
    Container, Typography, Paper, Box, Chip, List, ListItem, Button, TextField, IconButton, Card, CardContent,
} from '@mui/material';
import { Book1, Award, TickCircle, Add, DocumentText, Edit2 } from 'iconsax-react';

import { useHttp } from 'src/utils/api_intercepters.js';

const product_details = () => {
    const { product_id } = useParams();
    const useHttpMethod = useHttp();

    const [isLoading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);

    const [newSubject, setNewSubject] = useState('');
    const [newFeature, setNewFeature] = useState('');
    const [newOffering, setNewOffering] = useState({ title: '', description: '' });

    const [productDetails, setProductDetails] = useState({});

    console.log("prodasd", productDetails)

    useEffect(() => {
        useHttpMethod.get("/app/product/details?product_id=" + product_id).then((res) => {
            if (res.statusCode == 200) {
                setProductDetails(getDetails(res.data))
            } else {
                alert(res.message)
            }
        })
        setLoading(false);
    }, []);

    const updateProduct = () => {
        productDetails['product_id'] = product_id;
        useHttpMethod.post("/admin/product/update", productDetails).then((res) => {
            setIsEditing(false)
        })
    }

    return (
        <>
            <Box sx={{
                p: 2,
                mb: 2,
                border: '1px solid divider',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Typography>
                    Product Management
                </Typography>

                <Button
                    variant="contained"
                    startIcon={isEditing ? <DocumentText /> : <Edit2 />}
                    onClick={() => isEditing ? updateProduct() : setIsEditing(true)}
                >
                    {isEditing ? 'Save Changes' : 'Edit Product'}
                </Button>
            </Box>
            <Paper elevation={3} sx={{ p: 4, mb: 4 }}>

                {isEditing ? (
                    <Box sx={{ mb: 4 }}>
                        <TextField
                            fullWidth
                            label="Title"
                            value={productDetails.title}
                            onChange={(e) => setProductDetails(prev => ({ ...prev, title: e.target.value }))}
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            fullWidth
                            label="Description"
                            value={productDetails.description}
                            onChange={(e) => setProductDetails(prev => ({ ...prev, description: e.target.value }))}
                            multiline
                            rows={2}
                        />
                    </Box>
                ) : (
                    <>
                        <Typography variant="h5" gutterBottom>{productDetails?.title}</Typography>
                        <Typography variant="subtitle1" color="text.secondary" paragraph>
                            {productDetails?.description}
                        </Typography>
                    </>
                )}

                <Box sx={{ mb: 4, mt: 4 }}>
                    <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Book1 size={24} /> Subjects Included
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                        {productDetails?.subjects?.map((subject) => (
                            <Chip
                                key={subject}
                                label={subject}
                                color="secondary"
                                variant="outlined"
                                onDelete={isEditing ? () => {
                                    setProductDetails(prev => ({
                                        ...prev,
                                        subjects: prev.subjects.filter(remove => remove !== subject)
                                    }));
                                } : undefined}
                            />
                        ))}
                    </Box>
                    {isEditing && (
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            <TextField
                                size="small"
                                label="Add Subject"
                                value={newSubject}
                                onChange={(e) => setNewSubject(e.target.value)}
                            />
                            <Button startIcon={<Add size={20} />} onClick={() => {
                                if (newSubject.trim()) {
                                    setProductDetails(prev => ({
                                        ...prev,
                                        subjects: [...prev.subjects, newSubject.trim()]
                                    }));
                                    setNewSubject('');
                                }
                            }}>
                                Add
                            </Button>
                        </Box>
                    )}
                </Box>

                <Box sx={{ mb: 4, mt: 4 }}>
                    <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Book1 size={24} /> Features
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                        {productDetails?.features?.map((feature) => (
                            <Chip
                                key={feature}
                                label={feature}
                                color="secondary"
                                variant="outlined"
                                onDelete={isEditing ? () => {
                                    setProductDetails(prev => ({
                                        ...prev,
                                        features: prev.features.filter(remove => remove !== feature)
                                    }));
                                } : undefined}
                            />
                        ))}
                    </Box>
                    {isEditing && (
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            <TextField
                                size="small"
                                label="Add Feature"
                                value={newFeature}
                                onChange={(e) => setNewFeature(e.target.value)}
                            />
                            <Button startIcon={<Add size={20} />} onClick={() => {
                                if (newFeature.trim()) {
                                    setProductDetails(prev => ({
                                        ...prev,
                                        features: [...prev.features, newFeature.trim()]
                                    }));
                                    setNewFeature('');
                                }
                            }}>
                                Add
                            </Button>
                        </Box>
                    )}
                </Box>

                <Box>
                    <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Award size={24} /> What you'll get
                    </Typography>
                    <List>
                        {productDetails?.offerings?.map((offering, index) => (
                            <ListItem
                                key={index}
                                alignItems="flex-start"
                                sx={{ px: 0, position: 'relative' }}
                            >
                                <Card variant="outlined" sx={{ width: '100%' }} >
                                    <CardContent sx={{ padding: "10px !important" }}>
                                        {isEditing && (
                                            <IconButton
                                                size="small"
                                                onClick={() => {
                                                    setProductDetails(prev => ({
                                                        ...prev,
                                                        offerings: prev.offerings.filter((_, i) => i !== index)
                                                    }));
                                                }}
                                                sx={{ position: 'absolute', right: 0, top: 0, p: 2 }}
                                            >
                                                X
                                            </IconButton>
                                        )}
                                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                                            <TickCircle size={24} color="#2196f3" />
                                            <Box sx={{ width: '100%' }}>
                                                {isEditing ? (
                                                    <>
                                                        <TextField
                                                            fullWidth
                                                            size="small"
                                                            label="Title"
                                                            value={offering.title}
                                                            onChange={(e) => {
                                                                const newOfferings = [...productDetails.offerings];
                                                                newOfferings[index].title = e.target.value;
                                                                setProductDetails(prev => ({ ...prev, offerings: newOfferings }));
                                                            }}
                                                            sx={{ mb: 1, mt: 2 }}
                                                        />
                                                        <TextField
                                                            fullWidth
                                                            size="small"
                                                            label="Description"
                                                            value={offering.description}
                                                            onChange={(e) => {
                                                                const newOfferings = [...productDetails.offerings];
                                                                newOfferings[index].description = e.target.value;
                                                                setProductDetails(prev => ({ ...prev, offerings: newOfferings }));
                                                            }}
                                                            multiline
                                                        />
                                                    </>
                                                ) : (
                                                    <>
                                                        <Typography variant="h6" component="div">
                                                            {offering.title}
                                                        </Typography>
                                                        <Typography variant="body2" color="text.secondary">
                                                            {offering.description}
                                                        </Typography>
                                                    </>
                                                )}
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </ListItem>
                        ))}
                    </List>
                    {isEditing && (
                        <Box sx={{ mt: 2, p: 2, border: '1px dashed', borderColor: 'divider', borderRadius: 1 }}>
                            <Typography variant="subtitle2" gutterBottom>Add New Offering</Typography>
                            <TextField
                                fullWidth
                                size="small"
                                label="Title"
                                value={newOffering.title}
                                onChange={(e) => setNewOffering(prev => ({ ...prev, title: e.target.value }))}
                                sx={{ mb: 1 }}
                            />
                            <TextField
                                fullWidth
                                size="small"
                                label="Description"
                                value={newOffering.description}
                                onChange={(e) => setNewOffering(prev => ({ ...prev, description: e.target.value }))}
                                multiline
                                rows={2}
                                sx={{ mb: 1 }}
                            />
                            <Button startIcon={<Add size={20} />} onClick={() => {
                                if (newOffering.title.trim() && newOffering.description.trim()) {
                                    setProductDetails(prev => ({
                                        ...prev,
                                        offerings: [...prev.offerings, { ...newOffering }]
                                    }));
                                    setNewOffering({ title: '', description: '' });
                                }
                            }}>
                                Add Offering
                            </Button>
                        </Box>
                    )}
                </Box>
            </Paper>

        </>
    )
}

const getDetails = (data) => {
    const details = {
        title: data?.details?.title || '',
        description: data?.details?.description || '',
        subjects: data?.details?.subjects || [],
        features: data?.details?.features || [],
        offerings: data?.details?.offerings || [],
    };
    return details;
}

export default product_details