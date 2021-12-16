import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import notesReducer from '../reducers/notesReducer';
import filtersReducer from '../reducers/filtersReducer';
import thunk from 'redux-thunk';
import authReducer from '../reducers/authReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            notes: notesReducer,
            filters: filtersReducer,
            auth: authReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
}