import { VFC } from 'react';
import { Container } from '@mui/material';
import GoogleLogin, {
    GoogleLoginResponse,
    GoogleLoginResponseOffline,
} from 'react-google-login';
import Config from '../config';

const Success: () => void = () => {
    console.log('Login Success');
};

const Failure = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline,
) => {
    console.log(response);
};

const Login: VFC = () => (
    <Container sx={{ margin: 2 }}>
        <GoogleLogin
            clientId={Config.GoogleClientID}
            buttonText="Login"
            onSuccess={Success}
            onFailure={Failure}
        />
    </Container>
);

export default Login;
