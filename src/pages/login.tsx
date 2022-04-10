import { VFC } from 'react';
import { Container } from '@mui/material';
import GoogleLogin, {
    GoogleLoginResponse,
    GoogleLoginResponseOffline,
} from 'react-google-login';
import Config from '../config';
import { useHistory } from 'react-router-dom';

const Login: VFC = () => {
    // TODO Set the user information obtained from the server in Context.
    const history = useHistory();
    const Success: () => void = () => {
        console.log('Login Success');
        history.push('/questions');
    };
    const Failure = (
        response: GoogleLoginResponse | GoogleLoginResponseOffline,
    ) => {
        console.log(response);
    };

    return (
        <Container sx={{ margin: 2 }}>
            <GoogleLogin
                clientId={Config.GoogleClientID}
                buttonText="Login"
                onSuccess={Success}
                onFailure={Failure}
            />
        </Container>
    );
};

export default Login;
