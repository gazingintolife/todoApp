import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({startLogin}) => (
    <div className="box-layout">
        <div>
            <h3 className='loginText'>Take control of your tasks</h3>
            <h2 className='loginText'>Make a <span>To-Do</span> List</h2>
        </div>
        <div className="loginButtons">
            <button className="addbutton loginButton" onClick = {startLogin}>Login With Google</button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())     //we got access to dipatch via connect
});

export default connect(undefined, mapDispatchToProps)(LoginPage);  
// connect takes two arguments, first one is mapStateToProps and second one is
// mapDispatchToProps 