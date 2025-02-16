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
            },
            "2": {
                "34": "Some Basic Concepts of Chemistry",
                "35": "Atomic Structure",
                "36": "Periodic Table & Periodicity",
                "37": "Chemical Bonding & Molecular Structure",
                "38": "States of Matter",
                "39": "Redox Reaction",
                "40": "Chemical Thermodynamics",
                "41": "Chemical Equilibrium",
                "42": "Ionic Equilibrium",
                "43": "S-Block( alkali and alkaline metals )",
                "44": "P-Block elements ( Gr 13 & Gr 14 )",
                "45": "General Organic Chemistry IUPAC & Nomenclature",
                "46": "Hydrocarbon",
                "47": "Principles Related to Practical Chemistry"
            },
            "3": {
                "82": "Basic Mathematics",
                "83": "Logarithm",
                "84": "Quadratic Equation",
                "85": "Trigonometric Ratios and Identities",
                "86": "Sequence and Progression",
                "87": "Trigonometric equation",
                "88": "Solution of Triangle",
                "89": "Determinant",
                "90": "Straight line",
                "91": "Circle",
                "92": "Parabola",
                "93": "Ellipse",
                "94": "Hyperbola",
                "95": "Binomial Theorem",
                "96": "Permutation and Combination",
                "97": "Set & Relation",
                "98": "Function"
            },
            "5": {
                "99": "Living World",
                "100": "Biological Classification",
                "101": "Plant Kingdom",
                "102": "Morphology of Flowering Plants",
                "103": "Anatomy of Flowering Plants",
                "104": "Cell: The unit of life",
                "105": "Cell Cycle and Cell Division",
                "106": "Photosynthesis in Higher Plants",
                "107": "Respiration in Plants",
                "108": "Plant Growth and Development"
            },
            "6": {
                "125": "Animal Kingdom",
                "126": "Structural Organisation in Animals",
                "127": "Biomolecules",
                "128": "Breathing and Exchange of Gases",
                "129": "Body Fluids and Circulation",
                "130": "Excretory Products and Their Elimination",
                "131": "Locomotion and Movement",
                "132": "Neural control and co-ordination",
                "133": "Chemical co-ordination and Integration"
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
            },
            "2": {
                "48": "Halogen Derivatives",
                "49": "Alcohol, Phenol and Ether",
                "50": "Aldehydes Ketones and Acids",
                "51": "Amines",
                "52": "Solid State",
                "53": "Solution",
                "54": "Electrochemistry",
                "55": "Chemical Kinetics",
                "56": "Co-ordination Chemistry",
                "57": "Surface Chemistry",
                "58": "General Principles and Processes of Isolation of Elements",
                "59": "P-Block elements ( Group 15 & 16 )",
                "60": "P-Block elements ( Group 17 & 18 )",
                "61": "D & F Block",
                "62": "Practical Organic Chemistry",
                "63": "Biomolecules",
                "64": "Polymer"
            },
            "3": {
                "65": "Inverse Trigonometric Functions",
                "66": "Limit",
                "67": "Continuity",
                "68": "Derivability",
                "69": "Method of Differentiation",
                "70": "Indefinite Integration",
                "71": "Definite Integration",
                "72": "Application of Derivatives",
                "73": "Area under the Curve",
                "74": "Differential Equations",
                "75": "Vector",
                "76": "Three Dimensional Geometry",
                "77": "Complex Numbers",
                "78": "Probability",
                "79": "Mathematical logic",
                "80": "Matrices",
                "81": "Statistics"
            },
            "5": {
                "109": "Sexual Reproduction in Flowering Plants",
                "110": "Principles of Inheritance and Variation",
                "111": "Molecular Basis of Inheritance",
                "112": "Biotechnology: Principles and Processes",
                "113": "Organisms and Populations",
                "114": "Ecosystem",
                "115": "Biodiversity and Conservation",
                "116": "Transport in Plants & Mineral Nutrition",
                "117": "Strategies of Enhancement in Food Production",
                "118": "Environmental Issues"
            },
            "6": {
                "119": "Human Reproduction",
                "120": "Reproductive Health",
                "121": "Evolution",
                "122": "Human Health and Disease",
                "123": "Microbes in Human Welfare",
                "124": "Biotechnology and Its Applications"
            }
        }
    }
}

export default MasterData