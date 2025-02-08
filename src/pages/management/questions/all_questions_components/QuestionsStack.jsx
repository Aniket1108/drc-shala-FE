import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom';

import { Box, Stack, Card, CardContent, Typography, Chip, Collapse, Grid, Button } from '@mui/material'
import { Filter, ArrowDown2, ArrowUp2, Calendar } from 'iconsax-react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const QuestionsStack = ({
    allQuestions
}) => {
    const navigate = useNavigate()

    const [expandedRow, setExpandedRow] = useState(null);

    const handleRowClick = (userId) => {
        setExpandedRow(expandedRow === userId ? null : userId);
    };

    return (
        <Box >
            <Stack spacing={0}>
                {allQuestions.map((que) => (
                    <Card
                        key={que.question_id}
                        sx={{
                            cursor: 'pointer',
                            '&:hover': { bgcolor: 'action.hover' },
                            borderRadius: 0,
                            borderBottom: 1, 
                            borderColor: 'divider'
                        }}
                        onClick={() => handleRowClick(que.question_id)}
                    >
                        <CardContent sx={{
                            bgcolor: expandedRow === que.question_id && 'action.hover'
                        }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <Typography variant="body1">
                                        {que.question}
                                    </Typography>
                                </Box>

                                {expandedRow === que.question_id ? (
                                    <ArrowDown2 size={14} />
                                ) : (
                                    <ArrowUp2 size={14} />
                                )}
                            </Box>
                            <Collapse
                                in={expandedRow === que.question_id}
                                timeout="auto"
                                unmountOnExit
                            >
                                <Box sx={{ mt: 2, pt: 2, borderTop: 1, borderColor: 'divider' }}>

                                    <Typography variant="subtitle2" color="text.secondary">
                                        Phone
                                    </Typography>
                                    <Typography variant="body1">{que.option_A}</Typography>

                                </Box>

                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between'
                                }}>
                                    <div>

                                    </div>

                                    <div>
                                        <Button
                                            variant='outlined'
                                            sx={{ mr: "10px", width: 38, height: 38 }}
                                            onClick={() => {
                                            }}
                                            color={'error'}
                                        >
                                            <DeleteOutlineIcon />
                                        </Button>

                                        <Button variant='contained' onClick={() => {
                                            navigate('/management/question/' + que.question_id)
                                        }}>
                                            Edit
                                        </Button>
                                    </div>
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