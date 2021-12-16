import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter, { history } from './router/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { login, logout } from './actions/auth';
import { firebase } from './firebase/firebase';
import LoadingPage  from './components/LoadingPage';
import {startSetNotes} from './actions/notes';

const ourStore = configureStore();

const jsx = (
    <Provider store = {ourStore}>
        <AppRouter/>
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if(!hasRendered){
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered= true;
    }
}


ReactDOM.render( <p>...Loading</p> , document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
    if(user){
        ourStore.dispatch(login(user.uid));
        console.log('LogedIn');
        ourStore.dispatch(startSetNotes()).then(() => {
            renderApp();
            if(history.location.pathname === '/'){
            history.push('/dashboard');
        }; 
        })
    } else {
        ourStore.dispatch(logout());
        renderApp();
        history.push('/');
    }
})


 


