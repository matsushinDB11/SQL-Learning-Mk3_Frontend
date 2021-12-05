import axios from 'axios';
import { TPostIdToken } from './apiType';
import Config from '../config';
import { Failure, Result, Success } from '../errorHelper/resultTypes';
import { ApiError } from '../errorHelper/errors';
import jwtDecode, { JwtPayload } from 'jwt-decode';

type validResponse = {
    email: string;
    isAdmin: boolean;
};

type customJwtPayload = JwtPayload & {
    email: string;
    isAdmin: boolean;
};

const validateIdToken = async (
    idToken: string,
): Promise<Result<validResponse, ApiError>> => {
    const postData: TPostIdToken = {
        id_token: idToken,
    };
    const path = Config.ApiUrl + '/login';
    try {
        const res = await axios.post(path, postData);
        const jwt = res.headers['token'];
        const decodedJwt = jwtDecode<customJwtPayload>(jwt);
        const datta: validResponse = {
            email: decodedJwt.email,
            isAdmin: decodedJwt.isAdmin,
        };

        return new Success(datta);
    } catch (e) {
        return new Failure(new ApiError('Valid google id token'));
    }
};

export default validateIdToken;
