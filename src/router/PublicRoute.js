import React from 'react';
import {connect}  from 'react-redux';
import {Redirect, Route} from 'react-router-dom';
import LoginPage from '../components/LoginPage';

export const PublicRoute = ({ 
    isAuthenticated,
    component: Component,
    ...rest
    }) => (
    <div>
        <Route {...rest} component ={(props) => (
            isAuthenticated ? (
                <Redirect to='/dashboard'/>
            ) : (
                <Component {...props}/>
            )
        )}/>
    </div>
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);