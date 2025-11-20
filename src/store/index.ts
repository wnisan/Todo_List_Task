import {createStore, applyMiddleware, Store} from 'redux';
import { thunk } from 'redux-thunk';
import todoReducer from './reducers';

const store: Store = createStore(
    todoReducer,
    applyMiddleware(thunk)
);

export default store;