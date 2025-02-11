import katex from 'katex';
import 'katex/dist/katex.min.css';
window.katex = katex;

import {
    Divider, Paper, TablePagination, Pagination, Box, Typography, Button
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import QuestionsFilter from './all_questions_components/QuestionsFilter';
import QuestionsStack from './all_questions_components/QuestionsStack';
import { useHttp } from 'src/utils/api_intercepters.js';

const UserTable = ({ }) => {
    const useHttpMethod = useHttp();
    const navigate = useNavigate();

    const [page, setPage] = useState(1);

    const [activeFilters, setActiveFilters] = useState({
        stream: new Set(),
        standard: new Set(),
        subject: new Set()
    });

    const [allQuestions, setAllQuestions] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [refresh, setRefresh] = useState(false)

    const handleChangePage = (_event, newPage) => {
        setPage(newPage);
    };

    useEffect(() => {
        const filtersToSend = {
            stream: Array.from(activeFilters.stream),
            standard: Array.from(activeFilters.standard),
            subject: Array.from(activeFilters.subject),
        };

        const reqPayload = {
            filters: filtersToSend,
            page: page
        };

        useHttpMethod.post('/admin/questions/list', reqPayload).then(res => {
            if (res.statusCode == 200) {
                setAllQuestions(res.data.result)
                setTotalCount(res.data.totalCount)
            } else {
                alert(res.message)
            }
        });
    }, [activeFilters, page, refresh])

    return (
        <>
            <Box sx={{
                p: 2,
                mb: 2,
                border: '1px solid divider',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Typography>
                    All Questions
                </Typography>

                <Button
                    variant='contained'
                    onClick={() => navigate('/management/question')}
                >
                    Add Question
                </Button>
            </Box>

            <Paper sx={{ width: '100%', overflow: 'hidden' }}>

                <QuestionsFilter
                    activeFilters={activeFilters}
                    setActiveFilters={setActiveFilters}
                />

                <Divider />

                <QuestionsStack
                    allQuestions={allQuestions}
                    setRefresh={setRefresh}
                />

                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>

                    <Pagination
                        sx={{
                            mt: 2
                        }}
                        count={Math.ceil(totalCount / 10)}
                        page={page}
                        onChange={handleChangePage}
                    />
                </Box>
            </Paper>
        </>
    );
};

export default UserTable;