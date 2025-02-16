import { useState, useMemo } from 'react'
import { Box, Typography, Stack, Button, Chip, Dialog, DialogTitle, DialogContent, Select, FormGroup, MenuItem, DialogActions, FormControlLabel, Checkbox } from '@mui/material'
import { Filter, ArrowDown2, ArrowUp2, Calendar } from 'iconsax-react';

const QuestionsFilter = ({
    activeFilters,
    setActiveFilters
}) => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedKey, setSelectedKey] = useState('');
    const [tempFilters, setTempFilters] = useState({
        stream: new Set(),
        standard: new Set()
    });

    // Get unique values for each filter key
    const filterOptions = useMemo(() => {
        const options = {
            stream: streams,
            standard: standards
        };

        return options;
    }, []);

    const handleCloseDialog = () => {
        setDialogOpen(false);
        setSelectedKey('');
    };

    const handleApplyFilters = () => {
        setActiveFilters(tempFilters);
        setDialogOpen(false);
        setSelectedKey('');
        setPage(0);
    };

    const handleFilterValueChange = (key, value) => (event) => {
        const newFilters = { ...tempFilters };
        if (event.target.checked) {
            newFilters[key].add(value);
        } else {
            newFilters[key].delete(value);
        }
        setTempFilters(newFilters);
    };

    const handleOpenDialog = () => {
        setTempFilters({
            stream: new Set(activeFilters.stream),
            standard: new Set(activeFilters.standard),
            subject: new Set(activeFilters.subject),
        });
        setDialogOpen(true);
    };

    const handleRemoveFilter = (key, value) => {
        const newFilters = { ...activeFilters };
        newFilters[key].delete(value);
        setActiveFilters(newFilters);
        setPage(0);
    };

    const getActiveFilterChips = () => {
        const chips = [];
        Object.entries(activeFilters).forEach(([key, values]) => {
            values.forEach(value => {
                let displayValue = value;
                if (key === 'stream') {
                    displayValue = streams[value];
                } else if (key === 'standard') {
                    displayValue = standards[value];
                }
                chips.push(
                    <Chip
                        key={`${key}-${value}`}
                        label={`${key}: ${displayValue}`}
                        onDelete={() => handleRemoveFilter(key, value)}
                        color="primary"
                        size="small"
                    />
                );
            });
        });
        return chips;
    };

    const getFilterOptions = (key) => {
        if (key === 'stream' || key === 'standard') {
            return Object.entries(filterOptions[key]).map(([id, value]) => ({
                id: parseInt(id),
                value
            }));
        }
        return Array.from(filterOptions[key]).map(value => ({
            id: value,
            value
        }));
    };

    return (
        <Box sx={{ p: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Button
                    variant="outlined"
                    startIcon={<Filter size={16} />}
                    onClick={handleOpenDialog}
                >
                    Edit Filters
                </Button>
            </Box>

            {getActiveFilterChips().length > 0 && (
                <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                    {getActiveFilterChips()}
                </Stack>
            )}

            <Dialog open={dialogOpen} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
                <DialogTitle>Filter Questions</DialogTitle>
                <DialogContent>
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle2" gutterBottom>
                            Select Filter Key:
                        </Typography>
                        <Select
                            value={selectedKey}
                            onChange={(e) => setSelectedKey(e.target.value)}
                            fullWidth
                            size="small"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value="stream">Stream</MenuItem>
                            <MenuItem value="standard">Standard</MenuItem>
                        </Select>
                    </Box>

                    {selectedKey && (
                        <Box>
                            <Typography variant="subtitle2" gutterBottom>
                                Select Values:
                            </Typography>
                            <FormGroup>
                                {getFilterOptions(selectedKey).map(({ id, value }) => (
                                    <FormControlLabel
                                        key={id}
                                        control={
                                            <Checkbox
                                                checked={tempFilters[selectedKey].has(id)}
                                                onChange={handleFilterValueChange(selectedKey, id)}
                                                size="small"
                                            />
                                        }
                                        label={value}
                                    />
                                ))}
                            </FormGroup>
                        </Box>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog}>Cancel</Button>
                    <Button onClick={handleApplyFilters} variant="contained">
                        Apply Filters
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}

const streams = {
    1: 'NEET',
    2: 'JEE',
    3: 'MHT-CET'
};

const standards = {
    6: 'Grade 11',
    7: 'Grade 12',
    8: 'Repeater'
};

const subjects = {
    1: 'Physics',
    2: 'Chemistry',
    3: 'Mathematics',
    4: 'Biology',
    5: 'Botany',
    6: 'Zoology'
}

export default QuestionsFilter