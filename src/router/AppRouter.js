import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import NoteDashBoard from '../components/NoteDashBoard';
import AddNote from '../components/AddNote';
import EditNote from '../components/EditNote';
import PageNotFound from '../components/PageNotFound';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Modal from '../components/modal';

export const history = createHistory();

const AppRouter = () => (
    <Router history = {history}>
        <div>
            <Switch>
                <PublicRoute path = '/' component = {LoginPage} exact={true}/>
                <PrivateRoute path = '/dashboard' component = {NoteDashBoard} />
                <PrivateRoute path = '/create' component = {AddNote} />
                <PrivateRoute path = '/edit/:id?' component = {EditNote}/>
                <Route component = {PageNotFound}/>
            </Switch>
        </div>
    </Router>
);

export default AppRouter;