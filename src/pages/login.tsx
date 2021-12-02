import { VFC } from 'react';
import { Button, Container } from '@mui/material';

const Login: VFC = () => (
    <Container sx={{ margin: 2 }}>
        <Button variant="contained" sx={{ width: 400, height: 50 }}>
            Login
        </Button>
    </Container>
);

export default Login;
