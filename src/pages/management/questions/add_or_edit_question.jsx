import Quill from 'quill';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'

import ImageResize from 'quill-image-resize-module-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import katex from 'katex';
import 'katex/dist/katex.min.css';
window.katex = katex;

Quill.register('modules/imageResize', ImageResize);

import { Box, Button, Dialog, DialogActions, DialogTitle, Divider, Grid, Paper, Switch, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import MasterData from './question_actions_components/MasterData';

import { useHttp } from 'src/utils/api_intercepters.js';

const AddOrEditQuestion = () => {
    const quillRef = useRef(null);
    const navigate = useNavigate();
    const useHttpMethod = useHttp();

    const { question_id } = useParams(); // Get the ID from the URL

    const [selectionType, setSelectionType] = useState(null);
    const [questionData, setQuestionData] = useState(questionDataFeilds);
    const [dialogQuestionDataOpen, setDialogQuestionDataOpen] = useState(false);

    useEffect(() => {
        if (question_id) {
            useHttpMethod.get(`/admin/question/fetch?question_id=${question_id}`).then(res => {
                if (res.statusCode == 200) {
                    setQuestionData({ ...res.data })
                } else {
                    alert(res.message)
                }
            });
        }
    }, [])

    const handleOpenQuestionDataDialog = (type) => {
        setSelectionType(type);
        setDialogQuestionDataOpen(true);
    };

    const handleCloseQuestionDataDialog = () => {
        setDialogQuestionDataOpen(false);
        // setSelectionType(null);
    };
    console.log("asdasdasd", questionData)

    const updateQuestion = () => {
        const url = question_id ? '/admin/question/update' : '/admin/question/create'

        useHttpMethod.post(url, questionData).then(res => {
            if (res.statusCode == 200) {
                navigate('/management/all-questions')
            } else {
                alert(res.message)
            }
        });
    };

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
                handlers: {
                    image: function () {
                        const input = document.createElement('input');
                        input.setAttribute('type', 'file');
                        input.setAttribute('accept', 'image/*');
                        input.click();

                        input.onchange = async () => {
                            const file = input.files[0];
                            const formData = new FormData();
                            formData.append('image', file);

                            if (!file) {
                                console.log("no file")
                            } else {
                                console.log("type filuas", file.type)
                            }

                            const fileName = file.name;
                            const data = await useHttpMethod.get(`/admin/get-presigned-url?fileType=questionImage&fileName=${fileName}`)

                            const preSignedURL = data.data.preSignedURL;
                            const upload = await fetch(preSignedURL, {
                                method: 'PUT',
                                body: file,
                                headers: {
                                    "Content-Type": file.type
                                }
                            });

                            const imageUrl = data.data.filePath;

                            const editor = this.quill;
                            const range = editor.getSelection(true);
                            if (range) {
                                editor.insertEmbed(range.index, 'image', imageUrl);
                            } else {
                                editor.insertEmbed(editor.getLength(), 'image', imageUrl);
                            }

                            // clear
                            input.value = '';
                        };
                    }
                }
            },
            imageResize: {
                parchment: Quill.import("parchment"), // Fixes errors in some cases
                modules: ["Resize", "DisplaySize"]
            },
        }
    }, []);

    return (
        <>

            <Paper sx={{ width: '100%', minHeight: 'calc(100vh - 150px)', overflow: 'hidden', p: 2 }}>

                <MasterData
                    questionData={questionData}
                    setQuestionData={setQuestionData}
                    selectionType={selectionType}
                    setSelectionType={setSelectionType}
                />

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
                        <Typography color="text.secondary">User Input :-</Typography>
                        <Switch
                            checked={questionData.user_input_answer}
                            onChange={(event) => {
                                setQuestionData({ ...questionData, user_input_answer: event.target.checked })
                            }}
                        />
                    </Box>
                }

                {
                    questionData?.user_input_answer ? null : (
                        questionData?.question &&
                        <Box sx={{ mt: 1 }}>
                            {optionLabels.map((label, index) => {
                                if (index > 0 && !questionData[`option_${optionLabels[index - 1]}`]) return null;
                                return (
                                    <Paper variant="outlined" sx={{ p: 1, display: 'flex', flexDirection: 'column' }} key={index} >
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

                {
                    questionData?.question && (questionData?.user_input_answer || (questionData?.option_A && questionData?.option_B)) &&
                    <Grid container spacing={1} sx={{ mb: 2, mt: 3 }}>
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
                }

                {
                    <Box sx={{
                        mt: 5,
                        display: 'flex',
                        justifyContent: 'flex-end'
                    }}>

                        <Button
                            variant='contained'
                            onClick={updateQuestion}
                        >
                            Add Question
                        </Button>
                    </Box>
                }

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
        </>
    );
};


const optionLabels = ['A', 'B', 'C', 'D', 'E', 'F'];
const questionDataFeilds = {
    stream_id: '',
    standard_id: '',
    subject_id: '',
    section: null,
    topic_id: '',
    question: '',
    option_A: '',
    option_B: '',
    option_C: '',
    option_D: '',
    option_E: '',
    option_F: '',
    user_input_answer: false,
    answer: '',
    marks: '4'
}

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

export default AddOrEditQuestion;