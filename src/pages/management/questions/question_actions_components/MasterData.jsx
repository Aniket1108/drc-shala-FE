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

    const renderSelectionField = (type, label) => {
        return (
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
        )
    };

    const handleSelection = (id) => {
        let storedFilters = localStorage.getItem('questionsStoredFilter');
        storedFilters = storedFilters ? JSON.parse(storedFilters) : {}; 
        
        if (typeof storedFilters !== "object" || storedFilters === null) {
            storedFilters = {};
        }
        
        storedFilters[selectionType] = id;
        localStorage.setItem('questionsStoredFilter', JSON.stringify(storedFilters));


        if (selectionType == "stream_id" && id != 2) {
            setQuestionData(prev => ({
                ...prev,
                section: null
            }))
        }

        setQuestionData(prev => ({
            ...prev,
            [selectionType]: id
        }));
        handleCloseMasterDataDialog();
    };

    const getStaticData = (selectionType) => {
        if (selectionType != 'topic_id') return selectionOptions[selectionType];
        if (selectionType == 'topic_id') return data?.[questionData?.stream_id]?.[questionData?.standard_id]?.[questionData?.subject_id] || {}
    }

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
                            {data?.[questionData?.stream_id]?.[questionData?.standard_id]?.[questionData?.subject_id]?.[questionData.topic_id]}
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

                    {
                        selectionType && dialogMasterDataOpen && Object.entries(getStaticData(selectionType)).map(([id, name]) => (
                            <ListItemButton
                                key={id}
                                onClick={() => handleSelection(id)}
                                selected={questionData[selectionType] == id}
                            >
                                <ListItemText primary={name} />
                            </ListItemButton>
                        ))
                    }
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
        A: 'Section A',
        B: 'Section B'
    }
};

const data = {
    "2": {
        "6": {
            "1": {
                "1": "Physical World and Measurement",
                "2": "Units and Measurements",
                "3": "Motion in a Straight Line",
                "4": "Motion in a Plane",
                "5": "Laws of Motion",
                "6": "Work, Energy and Power",
                "7": "System of Particles",
                "8": "Gravitation",
                "9": "Mechanical Properties of Solids",
                "10": "Ray Optics and Optical Instruments",
                "11": "Thermal Properties of Matter",
                "12": "Thermodynamics",
                "13": "Kinetic Theory of Gases",
                "14": "Oscillations",
                "15": "Waves",
                "16": "Circular Motion",
                "17": "Rotational Motion"
            }
        },
        "7": {
            "1": {
                "18": "Electric Charges and Fields",
                "19": "Electrostatic Potential and Capacitance",
                "20": "Current Electricity",
                "21": "Moving Charges and Magnetism",
                "22": "Magnetism and Matter",
                "23": "Electromagnetic Induction",
                "24": "Alternating Current",
                "25": "Electromagnetic Waves",
                "26": "Mechanical Properties of Fluids",
                "27": "Wave Optics",
                "28": "Dual Nature of Radiation and Matter",
                "29": "Atoms",
                "30": "Nuclei",
                "31": "Semiconductor Electronics: Material, Devices and Simple Circuits",
                "32": "Communication System"
            }
        }
    }
}

export default MasterData