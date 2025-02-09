import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom';

import { Box, Stack, Card, CardContent, Typography, Chip, Collapse, Grid, Button, Divider } from '@mui/material'
import { styled } from '@mui/material/styles';
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
                {allQuestions && allQuestions.map((que) => (
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
                                <Box sx={{ display: 'flex' }}>
                                    {que.question_id} - <StyledDiv sx={{ ml: 1 }} dangerouslySetInnerHTML={{ __html: removeImgTags(que.question) }} />
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

                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Typography variant='body2' color='text.secondary'>
                                            Question :-
                                        </Typography>
                                        <StyledDiv sx={{ ml: 1 }} dangerouslySetInnerHTML={{ __html: que.question }} />
                                    </Box>

                                    <Box sx={{ ml: 2 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Typography variant='body2' color='text.secondary'>
                                                Option A :-
                                            </Typography>
                                            <StyledDiv sx={{ ml: 1 }} dangerouslySetInnerHTML={{ __html: que.option_A }} />
                                        </Box>

                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Typography variant='body2' color='text.secondary'>
                                                Option B :-
                                            </Typography>
                                            <StyledDiv sx={{ ml: 1 }} dangerouslySetInnerHTML={{ __html: que.option_B }} />
                                        </Box>

                                        {
                                            que?.option_C &&
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <Typography variant='body2' color='text.secondary'>
                                                    Option C :-
                                                </Typography>
                                                <StyledDiv sx={{ ml: 1 }} dangerouslySetInnerHTML={{ __html: que.option_C }} />
                                            </Box>
                                        }

                                        {
                                            que?.option_D &&
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <Typography variant='body2' color='text.secondary'>
                                                    Option D :-
                                                </Typography>
                                                <StyledDiv sx={{ ml: 1 }} dangerouslySetInnerHTML={{ __html: que.option_D }} />
                                            </Box>
                                        }

                                        {
                                            que?.option_E &&
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <Typography variant='body2' color='text.secondary'>
                                                    Option E :-
                                                </Typography>
                                                <StyledDiv sx={{ ml: 1 }} dangerouslySetInnerHTML={{ __html: que.option_E }} />
                                            </Box>
                                        }

                                        {
                                            que?.option_F &&
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <Typography variant='body2' color='text.secondary'>
                                                    Option F :-
                                                </Typography>
                                                <StyledDiv sx={{ ml: 1 }} dangerouslySetInnerHTML={{ __html: que.option_F }} />
                                            </Box>
                                        }

                                    </Box>
                                </Box>

                                <Divider sx={{ mb: 1, mt: 1 }} />

                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between'
                                }}>
                                    <div>
                                        <Typography variant='body2'>Answer :- {que.answer}</Typography>
                                        {que?.stream_id == 2 ? <Typography variant='body2'>Section :- {que.section}</Typography> : null}
                                        <Typography variant='body2'>Marks :- {que.marks}</Typography>
                                    </div>

                                    <div>
                                        <Button
                                            variant='outlined'
                                            sx={{ mr: "10px", width: 38, height: 38, opacity: 0.7 }}
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

const StyledDiv = styled('div')({
    '& p': {
        margin: 0,
        padding: 0,
    },
    '& h1': {
        margin: 0,
        padding: 0,
    },
    '& h2': {
        margin: 0,
        padding: 0,
    },
});

const removeImgTags = (htmlString) => {
    // Create a new DOM element to manipulate the HTML string
    const div = document.createElement('div');
    div.innerHTML = htmlString;

    const firstP = div.querySelector('p');
    let questionText = firstP ? firstP.textContent : '';

    return questionText
}

export default QuestionsStack