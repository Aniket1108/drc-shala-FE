import React, { useState, useMemo } from 'react';
import {
    Paper,
    TablePagination,
    Chip,
    Typography,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Box,
    Divider,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Select,
    MenuItem,
    Stack,
    Collapse,
    Grid,
    Card,
    CardContent,
} from '@mui/material';
import { Filter, ArrowDown2, ArrowUp2, Calendar } from 'iconsax-react';
import { streams, standards, users } from './mockData';

const UserTable = ({ }) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [activeFilters, setActiveFilters] = useState({
        stream: new Set(),
        standard: new Set(),
        status: new Set(),
    });
    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedKey, setSelectedKey] = useState('');
    const [tempFilters, setTempFilters] = useState({
        stream: new Set(),
        standard: new Set(),
        status: new Set(),
    });
    const [expandedRow, setExpandedRow] = useState(null);

    // Get unique values for each filter key
    const filterOptions = useMemo(() => {
        const options = {
            stream: streams,
            standard: standards,
            status: new Set(users.map(user => user.status)),
        };

        return options;
    }, [users]);

    const handleOpenDialog = () => {
        setTempFilters({
            stream: new Set(activeFilters.stream),
            standard: new Set(activeFilters.standard),
            status: new Set(activeFilters.status),
        });
        setDialogOpen(true);
    };

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

    const handleRemoveFilter = (key, value) => {
        const newFilters = { ...activeFilters };
        newFilters[key].delete(value);
        setActiveFilters(newFilters);
        setPage(0);
    };

    const handleRowClick = (userId) => {
        setExpandedRow(expandedRow === userId ? null : userId);
    };

    const filteredUsers = useMemo(() => {
        return users.filter(user => {
            return Object.entries(activeFilters).every(([key, values]) => {
                if (values.size === 0) return true;
                if (key === 'stream') {
                    return values.has(user.streamId);
                }
                if (key === 'standard') {
                    return values.has(user.standardId);
                }
                return values.has(user[key]);
            });
        });
    }, [users, activeFilters]);

    const handleChangePage = (_event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
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
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <Box sx={{ p: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Typography variant="h6">Users</Typography>
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
            </Box>

            <Dialog open={dialogOpen} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
                <DialogTitle>Filter Users</DialogTitle>
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
                            <MenuItem value="status">Status</MenuItem>
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

            <Divider />

            <Box sx={{ p: 2 }}>
                <Stack spacing={2}>
                    {filteredUsers
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((user) => (
                            <Card
                                key={user.id}
                                sx={{
                                    cursor: 'pointer',
                                    '&:hover': { bgcolor: 'action.hover' }
                                }}
                                onClick={() => handleRowClick(user.id)}
                            >
                                <CardContent sx={{ pb: 1 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                            {expandedRow === user.id ? (
                                                <ArrowDown2 size={20} />
                                            ) : (
                                                <ArrowUp2 size={20} />
                                            )}
                                            <Box>
                                                <Typography variant="h6" component="div">
                                                    {user.name}
                                                </Typography>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 0.5 }}>
                                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                                        <Typography variant="body2" color="text.secondary">
                                                            {user.email}
                                                        </Typography>
                                                    </Box>
                                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                                        <Calendar size={16} />
                                                        <Typography variant="body2" color="text.secondary">
                                                            {user.joinDate}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <Chip
                                                label={streams[user.streamId]}
                                                size="small"
                                                color="primary"
                                                variant="outlined"
                                            />
                                            <Chip
                                                label={standards[user.standardId]}
                                                size="small"
                                                color="primary"
                                                variant="outlined"
                                            />
                                            <Chip
                                                label={user.status}
                                                color={user.status === 'active' ? 'success' : 'error'}
                                                size="small"
                                            />
                                        </Box>
                                    </Box>
                                    <Collapse in={expandedRow === user.id} timeout="auto" unmountOnExit>
                                        <Box sx={{ mt: 2, pt: 2, borderTop: 1, borderColor: 'divider' }}>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12} sm={6} md={4}>
                                                    <Typography variant="subtitle2" color="text.secondary">
                                                        Phone
                                                    </Typography>
                                                    <Typography variant="body1">{user.details.phone}</Typography>
                                                </Grid>
                                                <Grid item xs={12} sm={6} md={4}>
                                                    <Typography variant="subtitle2" color="text.secondary">
                                                        Department
                                                    </Typography>
                                                    <Typography variant="body1">{user.details.department}</Typography>
                                                </Grid>
                                                <Grid item xs={12} sm={6} md={4}>
                                                    <Typography variant="subtitle2" color="text.secondary">
                                                        Location
                                                    </Typography>
                                                    <Typography variant="body1">{user.details.location}</Typography>
                                                </Grid>
                                                <Grid item xs={12} sm={6} md={4}>
                                                    <Typography variant="subtitle2" color="text.secondary">
                                                        Last Login
                                                    </Typography>
                                                    <Typography variant="body1">{user.details.lastLogin}</Typography>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                                                        Projects
                                                    </Typography>
                                                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                                                        {user.details.projects.map((project) => (
                                                            <Chip
                                                                key={project}
                                                                label={project}
                                                                size="small"
                                                                color="primary"
                                                                variant="outlined"
                                                            />
                                                        ))}
                                                    </Stack>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Collapse>
                                </CardContent>
                            </Card>
                        ))}
                </Stack>
            </Box>

            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={filteredUsers.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
};

export default UserTable;