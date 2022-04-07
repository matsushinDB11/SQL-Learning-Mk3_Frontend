import { useEffect, useState, VFC } from 'react';
import { getQuestionsList } from '../api/questions';
import { TGetQuestionsList } from '../api/apiTypes';
import { Container, Divider, List, ListItem } from '@mui/material';
import { Link } from 'react-router-dom';

type error = 'apiError' | '';

const ApiError = () => (
    <Container>
        <p>api error</p>
    </Container>
);

const QuestionsList: VFC = () => {
    const [questionsList, setQuestionsList] = useState<TGetQuestionsList>({
        questions: [],
    });
    const [error, setError] = useState<error>('');
    useEffect(() => {
        const callApi = async () => {
            const questionsData = await getQuestionsList();
            if (questionsData.isFailure()) {
                setError('apiError');
            } else {
                setQuestionsList(questionsData.value);
            }
        };
        void callApi();
    }, []);
    if (error == 'apiError') return <ApiError />;
    const questionsListRender = questionsList.questions.map((value, key) => (
        <>
            <ListItem key={key} alignItems="flex-start">
                <Link to={`/questions/${value.ID}`}>{value.title}</Link>
            </ListItem>
            <Divider variant="inset" component="li" />
        </>
    ));

    return (
        <Container>
            <h2>問題一覧</h2>
            <List
                sx={{
                    width: '100%',
                    maxWidth: 1000,
                    bgcolor: 'background.paper',
                }}
            >
                <Divider variant="inset" component="li" />
                {questionsListRender}
            </List>
        </Container>
    );
};

export default QuestionsList;
