import { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Grid, ListItemButton, ListItemText, Paper, Typography } from '@mui/material';

import { Edit } from 'iconsax-react';

const MasterData = ({
    questionData,
    setQuestionData,
    setSelectionType,
    selectionType
}) => {

    const [dialogMasterDataOpen, setDialogMasterDataOpen] = useState(false);

    const handleOpenMasterDataDialog = (type) => {
        setSelectionType(type);
        setDialogMasterDataOpen(true);
    };

    const handleCloseMasterDataDialog = () => {
        setDialogMasterDataOpen(false);
        setSelectionType(null);
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

    const handleSelection = (id) => {
        setQuestionData(prev => ({
            ...prev,
            [selectionType]: id
        }));
        handleCloseMasterDataDialog();
    };

    return (
        <>
            <Grid container spacing={1} sx={{ mb: 2 }}>
                {renderSelectionField('stream_id', 'Stream')}
                {renderSelectionField('standard_id', 'Standard')}
                {renderSelectionField('subject_id', 'Subject')}
                {questionData.stream_id == 2 && renderSelectionField('section', 'Section')}
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
                {questionData["topic_id"] ? (
                    <Box onClick={() => handleOpenMasterDataDialog("topic_id")} sx={{ display: "flex", alignItems: 'center', '&:hover': { color: 'action.hover', cursor: 'pointer' } }}>
                        <Typography sx={{ mr: 1, ml: 2 }}>
                            {selectionOptions["topic_id"][questionData["topic_id"]]}
                        </Typography>
                        <Edit size={16} />
                    </Box>
                ) : (
                    <Button
                        size='small'
                        variant="contained"
                        onClick={() => handleOpenMasterDataDialog("topic_id")}
                        sx={{ ml: 2 }}
                    >
                        Select Topic
                    </Button>
                )}
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
        </>
    )
}

const selectionOptions = {
    stream_id: {
        1: 'NEET',
        2: 'JEE',
        3: 'MHT-CET'
    },
    standard_id: {
        6: 'Grade 11',
        7: 'Grade 12',
        8: 'Repeater'
    },
    subject_id: {
        1: 'Physics',
        2: 'Chemistry',
        3: 'Mathematics',
        4: 'Biology',
    },
    section: {
        1: 'Section A',
        2: 'Section B'
    },
    topic_id: {
        1: 'Mechanics',
        2: 'Thermodynamics',
        3: 'Optics',
        4: 'Modern Physics'
    }
};


export default MasterData