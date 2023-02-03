import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { ROUTES } from './application/constants';
import './index.css';
import { withAuthentication } from './auth/auth-hoc';
import { AuthUserContext } from './auth/auth-user-context';
import { Navbar } from './components/Navbar';
import { SignUpPage } from './pages/SignUpPage';
import { SignInPage } from './pages/SignInPage';
import { BoardsPage } from './pages/BoardsPage';
import { BoardsGroup } from './pages/BoardsGroup';
import { BoardPageGroup } from './pages/BoardPageGroup';
import { BoardPage } from './pages/BoardPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { myProfile } from './pages/myProfile'
import { Welcome } from './pages/Welcome'


export const Content = withAuthentication(() => (
    <Router>
        <>
            <AuthUserContext.Consumer>
                {(authUser) => authUser && <Navbar />}
            </AuthUserContext.Consumer>

            <div className="h-full">
                <Switch>
                    <Redirect exact from="/" to="/Welcome" />
                    <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
                    <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
                    <Route exact path={ROUTES.BOARDS} component={BoardsPage} />
                    <Route exact path={ROUTES.BOARD} component={BoardPage} />
                    <Route exact path={ROUTES.BOARDS_GROUP} component={BoardsGroup} />
                    <Route exact path={ROUTES.BOARDS_GROUPS} component={BoardPageGroup} />
                    <Route exact path={ROUTES.MYPROFILE} component={myProfile} />
                    <Route exact path={ROUTES.WELCOME} component={Welcome} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        </>
    </Router>
));

const App = () => <Content />;

export default App;
