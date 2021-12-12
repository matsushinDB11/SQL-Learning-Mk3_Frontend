import { useEffect, useState, VFC } from 'react';
import { getQuestionsList } from '../api/questions';
import { TGetQuestionsList } from '../api/apiType';
import { Container, List, ListItemText } from '@mui/material';

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
        void (async () => {
            const questionsData = await getQuestionsList();
            if (questionsData.isFailure()) {
                setError('apiError');
            } else {
                setQuestionsList(questionsData.value);
            }
        })().then();
    }, [error, questionsList]);
    if (error == 'apiError') return <ApiError />;
    const questionsListRender = questionsList.questions.map((value, key) => (
        <ListItemText key={key} primary={value.title} />
    ));

    return (
        <Container>
            <List
                sx={{
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: 'background.paper',
                }}
            >
                {questionsListRender}
            </List>
        </Container>
    );
};

export default QuestionsList;
