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
                    <Route exact path="/questions" component={QuestionsList} />
                    <Route
                        path="/questions/:questionId"
                        component={SqlAnswer}
                    />
                </AuthProvider>
            </Switch>
        </>
    );
};

export default App;
