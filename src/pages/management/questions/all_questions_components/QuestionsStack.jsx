import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom';

import { Box, Stack, Card, CardContent, Typography, Chip, Collapse, Grid, Button, Divider } from '@mui/material'
import { styled } from '@mui/material/styles';
import { Filter, ArrowDown2, ArrowUp2, Calendar } from 'iconsax-react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useHttp } from 'src/utils/api_intercepters.js';

const QuestionsStack = ({
    allQuestions,
    setRefresh
}) => {
    const navigate = useNavigate()
    const useHttpMethod = useHttp();

    const [expandedRow, setExpandedRow] = useState(null);
    const [queIdToDelete, setQueIdToDelete] = useState(null);
    console.log("question_id", queIdToDelete)
    const handleRowClick = (userId) => {
        setExpandedRow(expandedRow === userId ? null : userId);
    };

    const deleteQuestion = () => {
        useHttpMethod.get('/admin/question/delete?question_id=' + queIdToDelete).then(res => {
            if (res.statusCode == 200) {
                alert(res.message)
                setRefresh((prev) => !prev)
            }
        });
    }

    return (
        <Box >
            <Stack spacing={0}>
                {allQuestions && allQuestions.map((que) => {
                    const questionInHead = removeImgTags(que.question)
                    return (
                        <Card
                            key={que.question_id}
                            sx={{
                                cursor: 'pointer',
                                '&:hover': { bgcolor: 'action.hover' },
                                borderRadius: 0,
                                borderBottom: 1,
                                borderColor: 'divider',
                            }}
                        >
                            <CardContent sx={{
                                bgcolor: expandedRow === que.question_id && 'action.hover',
                                paddingTop: '0px !important',
                                paddingBottom: '0px !important',
                            }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 2 }}
                                    onClick={() => {
                                        handleRowClick(que.question_id)
                                        setQueIdToDelete(null)
                                    }}
                                >
                                    <Box sx={{ display: 'flex' }}>
                                        {que.question_id} - <StyledDiv sx={{ ml: 1 }} dangerouslySetInnerHTML={{ __html: questionInHead }} />
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
                                    sx={{ pb: 2 }}
                                >

                                    <Box sx={{ pt: 1, borderTop: 1, borderColor: 'divider' }}>

                                        <Box >
                                            <Typography variant='body2' color='text.secondary'>
                                                Question :-
                                            </Typography>
                                            <StyledDiv sx={{ ml: 1 }} dangerouslySetInnerHTML={{ __html: que.question }} />
                                        </Box>

                                        <Box sx={{ ml: 2, mt: 2 }}>
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
                                            {
                                                expandedRow === que.question_id && queIdToDelete === que.question_id ?
                                                    <div>
                                                        <Button
                                                            variant='contained'
                                                            onClick={() => {
                                                                setQueIdToDelete(null)
                                                            }}
                                                        >
                                                            cancel
                                                        </Button>

                                                        <Button
                                                            variant='contained'
                                                            color='error'
                                                            sx={{ ml: 1 }}
                                                            onClick={() => { deleteQuestion() }}
                                                        >
                                                            delete
                                                        </Button>
                                                    </div>
                                                    :
                                                    <Box>

                                                        <Button
                                                            variant='outlined'
                                                            sx={{ mr: "10px", width: 38, height: 38 }}
                                                            onClick={() => {
                                                                console.log(que)
                                                                setQueIdToDelete(que.question_id)
                                                            }}
                                                            color={'warning'}
                                                        >
                                                            <DeleteOutlineIcon />
                                                        </Button>

                                                        <Button variant='contained' onClick={() => {
                                                            navigate('/management/question/' + que.question_id)
                                                        }}>
                                                            Edit
                                                        </Button>
                                                    </Box>
                                            }

                                        </div>
                                    </Box>
                                </Collapse>
                            </CardContent>
                        </Card>
                    )
                }
                )}
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
    const div = document.createElement('div');
    div.innerHTML = htmlString;

    const tagsToRemove = div.querySelectorAll('img, br'); // Select both img and br tags

    tagsToRemove.forEach(tag => tag.remove());

    return div.innerHTML;
}

export default QuestionsStack