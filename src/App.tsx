import { VFC } from 'react';
import './styles/App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/login';
import SqlAnswer from './pages/SqlAnswer';
import { AuthProvider } from './context/AuthContext';

const App: VFC = () => {
    return (
        <>
            <Switch>
                <AuthProvider>
                    <Route exact path="/" component={Login} />
                    <Route path="/answer" component={SqlAnswer} />
                </AuthProvider>
            </Switch>
        </>
    );
};

export default App;
