import { VFC } from 'react';
import './styles/App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/login';
import SqlAnswer from './pages/SqlAnswer';
import { AuthProvider } from './context/AuthContext';
import QuestionsList from './pages/questionsList';
import Header from './components/header';

const App: VFC = () => {
    return (
        <>
            <Switch>
                <AuthProvider>
                    <Header />
                    <Route exact path="/" component={Login} />
                    <Route path="/answer" component={SqlAnswer} />
                    <Route path="/questions" component={QuestionsList} />
                </AuthProvider>
            </Switch>
        </>
    );
};

export default App;
