import { VFC } from 'react';
import './styles/App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/login';
import SqlAnswer from './pages/SqlAnswer';

const App: VFC = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/answer" component={SqlAnswer} />
            </Switch>
        </>
    );
};

export default App;
