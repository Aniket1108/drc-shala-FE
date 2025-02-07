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

import QuestionsFilter from './all_questions_components/QuestionsFilter';
import QuestionsStack from './all_questions_components/QuestionsStack';

const UserTable = ({ }) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [activeFilters, setActiveFilters] = useState({
        stream: new Set(),
        standard: new Set(),
        status: new Set(),
    });

    const handleChangePage = (_event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>

            <QuestionsFilter
                activeFilters={activeFilters}
                setActiveFilters={setActiveFilters}
            />

            <Divider />

            <QuestionsStack
                activeFilters={activeFilters}
            />

            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={5}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
};

export default UserTable;