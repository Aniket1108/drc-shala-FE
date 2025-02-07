import { useState, useMemo } from 'react'
import { Box, Stack, Card, CardContent, Typography, Chip, Collapse, Grid } from '@mui/material'
import { Filter, ArrowDown2, ArrowUp2, Calendar } from 'iconsax-react';
import { streams, standards } from '../mockData';

const QuestionsStack = ({
    activeFilters,
    allQuestions
}) => {

    const [expandedRow, setExpandedRow] = useState(null);

    const handleRowClick = (userId) => {
        setExpandedRow(expandedRow === userId ? null : userId);
    };

    const filteredUsers = allQuestions;

    return (
        <Box sx={{ p: 2 }}>
            <Stack spacing={2}>
                {filteredUsers.map((user) => (
                    <Card
                        key={user.question_id}
                        sx={{
                            cursor: 'pointer',
                            '&:hover': { bgcolor: 'action.hover' }
                        }}
                        onClick={() => handleRowClick(user.question_id)}
                    >
                        <CardContent sx={{ pb: 1 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    {expandedRow === user.question_id ? (
                                        <ArrowDown2 size={20} />
                                    ) : (
                                        <ArrowUp2 size={20} />
                                    )}
                                    <Box>
                                        <Typography variant="h6" component="div">
                                            {user.question}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Collapse in={expandedRow === user.question_id} timeout="auto" unmountOnExit>
                                <Box sx={{ mt: 2, pt: 2, borderTop: 1, borderColor: 'divider' }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6} md={4}>
                                            <Typography variant="subtitle2" color="text.secondary">
                                                Phone
                                            </Typography>
                                            <Typography variant="body1">{user.option_A}</Typography>
                                        </Grid>
                                        {/* <Grid item xs={12} sm={6} md={4}>
                                            <Typography variant="subtitle2" color="text.secondary">
                                                Department
                                            </Typography>
                                            <Typography variant="body1">{user.details.department}</Typography>
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={4}>
                                            <Typography variant="subtitle2" color="text.secondary">
                                                Location
                                            </Typography>
                                            <Typography variant="body1">{user.details.location}</Typography>
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={4}>
                                            <Typography variant="subtitle2" color="text.secondary">
                                                Last Login
                                            </Typography>
                                            <Typography variant="body1">{user.details.lastLogin}</Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                                                Projects
                                            </Typography>
                                            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                                                {user.details.projects.map((project) => (
                                                    <Chip
                                                        key={project}
                                                        label={project}
                                                        size="small"
                                                        color="primary"
                                                        variant="outlined"
                                                    />
                                                ))}
                                            </Stack>
                                        </Grid> */}
                                    </Grid>
                                </Box>
                            </Collapse>
                        </CardContent>
                    </Card>
                ))}
            </Stack>
        </Box>
    )
}

export default QuestionsStack