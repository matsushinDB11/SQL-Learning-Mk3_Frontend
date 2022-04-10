import api from './axiosConfig';
import { Failure, Result, Success } from '../errorHelper/resultTypes';
import { TGetQuestion } from './apiTypes';
import { ApiError } from '../errorHelper/errors';

const getQuestion = async (
    questionID: number | any,
): Promise<Result<TGetQuestion, ApiError>> => {
    try {
        // TODO SqlAnswer.jsxのts化後削除する
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        const res = await api.get<TGetQuestion>(`questions/${questionID}`);

        return new Success(res.data);
    } catch (e) {
        return new Failure(new ApiError('Get question'));
    }
};

export { getQuestion };
