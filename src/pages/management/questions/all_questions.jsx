import {
    Divider, Paper, TablePagination
} from '@mui/material';
import { useEffect, useState } from 'react';

import QuestionsFilter from './all_questions_components/QuestionsFilter';
import QuestionsStack from './all_questions_components/QuestionsStack';
import { useHttp } from 'src/utils/api_intercepters.js';

const UserTable = ({ }) => {
    const useHttpMethod = useHttp();

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [activeFilters, setActiveFilters] = useState({
        stream: new Set(),
        standard: new Set(),
        status: new Set(),
    });
    const [allQuestions, setAllQuestions] = useState([]);

    const handleChangePage = (_event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };


    useEffect(() => {
        useHttpMethod.get('/admin/questions/list').then(res => {
            if (res.statusCode == 200) {
                setAllQuestions(res.data.result)
            } else {
                alert(res.message)
            }
        });

    }, [])

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>

            <QuestionsFilter
                activeFilters={activeFilters}
                setActiveFilters={setActiveFilters}
            />

            <Divider />

            <QuestionsStack
                allQuestions={allQuestions}
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