import { useState, useMemo, useRef } from 'react';
import Quill, { Delta } from 'quill';

import ReactQuill from 'react-quill';
import ImageResize from 'quill-image-resize-module-react';
import 'react-quill/dist/quill.snow.css';

import katex from 'katex';
import 'katex/dist/katex.min.css';
window.katex = katex;

const Clipboard = Quill.import('modules/clipboard');
Quill.register('modules/imageResize', ImageResize);
// Quill.register('modules/clipboard', CustomClipboard);

import { Paper, Box, Typography, Divider, Grid, Button, Dialog, DialogContent, DialogActions, DialogTitle, List, ListItemButton, ListItemText, Switch, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Edit } from 'iconsax-react';

const StyledReactQuill = styled(ReactQuill)({
    '& .ql-container': {
        height: '200px',
        border: 'none',
        boxShadow: 'none',
    },
    '& .ql-editor': {
        minHeight: '150px',
    },
    '& .ql-tooltip': {
        left: '0 !important',
    },
    '& .ql-toolbar': {
        border: 'none',
        boxShadow: 'none',
        backgroundColor: '#fff', // Ensures a solid background
        opacity: 1, // Makes sure it's fully visible
    },
    '& .ql-toolbar.ql-snow': {
        border: 'none !important',
        backgroundColor: '#fff',
        opacity: 1,
    },
    '& .ql-container.ql-snow': {
        border: 'none !important',
    },
    '& .ql-picker-label, & .ql-picker-options, & button': {
        color: '#000 !important', // Ensures dark text/icons
        opacity: '1 !important', // Forces full visibility
    },
});

const optionLabels = ['A', 'B', 'C', 'D', 'E', 'F'];
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
const AddOrEditQuestion = () => {
    const quillRef = useRef(null);

    const selectionOptions = {
        stream: {
            1: 'NEET',
            2: 'JEE',
            3: 'MHT-CET'
        },
        standard: {
            6: 'Grade 11',
            7: 'Grade 12',
            8: 'Repeater'
        },
        subject: {
            1: 'Physics',
            2: 'Chemistry',
            3: 'Mathematics',
            4: 'Biology',
        },
        section: {
            1: 'Section A',
            2: 'Section B'
        },
        topic: {
            1: 'Mechanics',
            2: 'Thermodynamics',
            3: 'Optics',
            4: 'Modern Physics'
        }
    };

    const [questionData, setQuestionData] = useState({
        stream: '',
        standard: '',
        subject: '',
        section: null,
        topic: '',
        question: '',
        option_A: '',
        option_B: '',
        option_C: '',
        option_D: '',
        option_E: '',
        option_F: '',
        userInputAnswer: false,
        answer: '',
        marks: ''
    });

    console.log(questionData)

    const [dialogMasterDataOpen, setDialogMasterDataOpen] = useState(false);
    const [dialogQuestionDataOpen, setDialogQuestionDataOpen] = useState(false);
    const [selectionType, setSelectionType] = useState(null);

    const handleOpenMasterDataDialog = (type) => {
        setSelectionType(type);
        setDialogMasterDataOpen(true);
    };

    const handleCloseMasterDataDialog = () => {
        setDialogMasterDataOpen(false);
        setSelectionType(null);
    };

    const handleOpenQuestionDataDialog = (type) => {
        setSelectionType(type);
        setDialogQuestionDataOpen(true);
    };

    const handleCloseQuestionDataDialog = () => {
        setDialogQuestionDataOpen(false);
        // setSelectionType(null);
    };

    const handleSelection = (id) => {
        setQuestionData(prev => ({
            ...prev,
            [selectionType]: id
        }));
        handleCloseMasterDataDialog();
    };

    const renderSelectionField = (type, label) => (
        <Grid item xs={6} sm={4} md={3}>
            <Paper
                variant="outlined"
                sx={{
                    p: 1,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',

                }}
            >
                <Typography variant="body1" color="text.secondary">
                    {label}
                </Typography>
                {questionData[type] ? (
                    <Button
                        variant="outlined"
                        size='small'
                        startIcon={<Edit size={16} />}
                        onClick={() => handleOpenMasterDataDialog(type)}
                        fullWidth
                    >
                        {selectionOptions[type][questionData[type]]}
                    </Button>
                ) : (
                    <Button
                        size='small'
                        variant="contained"
                        onClick={() => handleOpenMasterDataDialog(type)}
                        fullWidth
                    >
                        Select {label}
                    </Button>
                )}
            </Paper>
        </Grid>
    );

    const modules = useMemo(() => {
        return {
            toolbar: {
                container: [
                    [{ 'header': '1' }, { 'header': '2' }],
                    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                    ['bold', 'italic', 'underline'],
                    [{ 'script': 'sub' }, { 'script': 'super' }], // Add subscript and superscript buttons
                    ['link', 'image'],
                    [{ 'color': [] }, { 'background': [] }], // Text color and background color
                    ['clean'],
                    ['formula']
                ],
            }
        }
    }, []);

    return (
        <Paper sx={{ width: '100%', minHeight: 'calc(100vh - 150px)', overflow: 'hidden', p: 2 }}>
            <Grid container spacing={1} sx={{ mb: 2 }}>
                {renderSelectionField('stream', 'Stream')}
                {renderSelectionField('standard', 'Standard')}
                {renderSelectionField('subject', 'Subject')}
                {renderSelectionField('section', 'Section')}
            </Grid>

            <Divider sx={{ my: 1 }} />

            <Box
                variant="outlined"
                sx={{
                    height: '50px',
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <Typography variant="body1" color="text.secondary">
                    Topic :-
                </Typography>
                {questionData["topic"] ? (
                    <Box onClick={() => handleOpenMasterDataDialog("topic")} sx={{ display: "flex", alignItems: 'center', '&:hover': { color: 'action.hover', cursor: 'pointer' } }}>
                        <Typography sx={{ mr: 1, ml: 2 }}>
                            {selectionOptions["topic"][questionData["topic"]]}
                        </Typography>
                        <Edit size={16} />
                    </Box>
                ) : (
                    <Button
                        size='small'
                        variant="contained"
                        onClick={() => handleOpenMasterDataDialog("topic")}
                        sx={{ ml: 2 }}
                    >
                        Select Topic
                    </Button>
                )}
            </Box>

            <Divider sx={{ my: 1 }} />

            <Box sx={{ mb: 2 }}>
                <Typography variant="h6" gutterBottom color="text.secondary">
                    Question :-
                    <Button
                        size='small'
                        variant="contained"
                        onClick={() => handleOpenQuestionDataDialog("question")}
                        sx={{ ml: 2 }}
                    >
                        {questionData?.question ? "Edit Question" : "Add Question"}
                    </Button>
                </Typography>
                <Typography>
                    {questionData?.question && (
                        <Box
                            onClick={() => handleOpenQuestionDataDialog("question")}
                            sx={{
                                display: "flex",
                                alignItems: 'center',
                                border: 'divider',
                                ml: 2
                            }}
                        >
                            <StyledDiv dangerouslySetInnerHTML={{ __html: questionData?.question }} />
                        </Box>
                    )}
                </Typography>
            </Box>

            <Divider />

            {
                questionData?.question &&
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <p>User Input</p>
                    <Switch
                        checked={questionData.userInputAnswer}
                        onChange={(event) => {
                            setQuestionData({ ...questionData, userInputAnswer: event.target.checked })
                        }}
                    />
                </Box>
            }

            {
                questionData?.userInputAnswer ? (
                    questionData?.question &&
                    <Grid container spacing={1} sx={{ mb: 2 }}>
                        <Grid item xs={12} sm={4} md={3}>

                            <TextField
                                placeholder='Answer *'
                                size='medium'
                                label='Answer *'
                                value={questionData?.answer}
                                onChange={(event) => setQuestionData({ ...questionData, answer: event.target.value })}
                            />
                        </Grid>

                        <Grid item xs={12} sm={4} md={3}>
                            <TextField
                                placeholder='Marks *'
                                size='medium'
                                label='Marks *'
                                value={questionData?.marks}
                                onChange={(event) => setQuestionData({ ...questionData, marks: event.target.value })}
                            />
                        </Grid>
                    </Grid>

                ) : (
                    questionData?.question &&
                    <Box sx={{ mt: 1 }}>
                        {optionLabels.map((label, index) => {
                            if (index > 0 && !questionData[`option_${optionLabels[index - 1]}`]) return null;
                            return (
                                <Paper variant="outlined" sx={{ p: 1, display: 'flex', flexDirection: 'column' }}>
                                    <Typography variant="body1" color="text.secondary">
                                        Option {label} :-
                                        {
                                            questionData?.[`option_${label}`] &&
                                            <Button
                                                size='small'
                                                variant="contained"
                                                onClick={() => handleOpenQuestionDataDialog(`option_${label}`)}
                                                sx={{ ml: 2 }}
                                            >
                                                Edit Option {label}
                                            </Button>
                                        }
                                    </Typography>

                                    {questionData[`option_${label}`] ? (
                                        <Box sx={{ mt: 2 }}>
                                            <StyledDiv dangerouslySetInnerHTML={{ __html: questionData[`option_${label}`] }} />
                                        </Box>
                                    ) : (
                                        <Button
                                            size='small'
                                            variant="contained"
                                            onClick={() => handleOpenQuestionDataDialog(`option_${label}`)}
                                            fullWidth
                                        >
                                            Add Option {label}
                                        </Button>
                                    )}
                                </Paper>
                            );
                        })}
                    </Box>
                )
            }


            <Dialog
                open={dialogMasterDataOpen}
                onClose={handleCloseMasterDataDialog}
                maxWidth="xs"
                fullWidth
            >
                <DialogTitle>
                    Select {selectionType && selectionType.charAt(0).toUpperCase() + selectionType.slice(1)}
                </DialogTitle>
                <DialogContent dividers>

                    {selectionType && dialogMasterDataOpen && Object.entries(selectionOptions[selectionType]).map(([id, name]) => (
                        <ListItemButton
                            key={id}
                            onClick={() => handleSelection(parseInt(id))}
                            selected={questionData[selectionType] === parseInt(id)}
                        >
                            <ListItemText primary={name} />
                        </ListItemButton>
                    ))}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseMasterDataDialog}>Cancel</Button>
                </DialogActions>
            </Dialog>

            <Dialog
                open={dialogQuestionDataOpen}
                onClose={handleCloseQuestionDataDialog}
                fullWidth
            >
                <DialogTitle>
                    {questionData[selectionType] ? "Edit" : "Add"} {selectionType && selectionType.replace('_', ' ')}
                </DialogTitle>
                <StyledReactQuill
                    value={questionData[selectionType] || ''}
                    onChange={(value) => {
                        if (value == '<p><br></p>' || value === '<p></p>') return setQuestionData({ ...questionData, [selectionType]: '' })
                        setQuestionData({ ...questionData, [selectionType]: value })
                    }}
                    modules={modules}
                    ref={quillRef}
                    theme="snow"
                    placeholder="Write something ..."
                />
                <DialogActions>
                    <Button onClick={handleCloseQuestionDataDialog}>Done</Button>
                </DialogActions>
            </Dialog>
        </Paper>
    );
};

export default AddOrEditQuestion;