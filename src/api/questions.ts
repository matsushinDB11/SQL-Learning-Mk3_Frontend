import api from './axiosConfig';
import { TGetQuestionsList } from './apiTypes';
import { Failure, Result, Success } from '../errorHelper/resultTypes';
import { ApiError } from '../errorHelper/errors';

const getQuestionsList = async (): Promise<
    Result<TGetQuestionsList, ApiError>
> => {
    try {
        const res = await api.get<TGetQuestionsList>('/questions');

        return new Success(res.data);
    } catch (e) {
        return new Failure(new ApiError('Get api list'));
    }
};

export { getQuestionsList };
