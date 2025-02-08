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

import { Paper, Box, Typography, Divider, Grid, Button, Dialog, DialogContent, DialogActions, DialogTitle, List, ListItemButton, ListItemText } from '@mui/material';
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
        section: '',
        topic: '',
        question: '',
        option_A: '',
        option_B: '',
        option_C: '',
        option_D: '',
        option_E: '',
        option_F: '',
    });

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
        setSelectionType(null);
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
        <Paper sx={{ width: '100%', overflow: 'hidden', p: 2 }}>
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

            <Box>
                <Typography variant="h6" gutterBottom>
                    Question :-{questionData["question"] ? (
                        <Box onClick={() => handleOpenQuestionDataDialog("question")} sx={{ display: "flex", alignItems: 'center', '&:hover': { color: 'action.hover', cursor: 'pointer' } }}>
                            {selectionOptions["question"]}
                            <Edit size={16} />
                        </Box>
                    ) : (
                        <Button
                            size='small'
                            variant="contained"
                            onClick={() => handleOpenQuestionDataDialog("question")}
                            sx={{ ml: 2 }}
                        >
                            Add Question
                        </Button>
                    )}
                </Typography>
            </Box>

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
                    {questionData[selectionType] ? "Edit" : "Add"} {selectionType && selectionType.charAt(0).toUpperCase() + selectionType.slice(1)}
                </DialogTitle>
                <StyledReactQuill
                    value={questionData?.question}
                    onChange={(event) => {
                    }}
                    modules={modules}
                    ref={quillRef}
                    // onBlur={handleOnBlur}
                    theme="snow"
                    placeholder="Write something ..."
                />
                <DialogActions>
                    <Button onClick={handleCloseQuestionDataDialog}>Cancel</Button>
                    <Button onClick={handleCloseQuestionDataDialog}>Add</Button>
                </DialogActions>
            </Dialog>
        </Paper>
    );
};

export default AddOrEditQuestion;