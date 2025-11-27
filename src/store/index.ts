import {createStore, applyMiddleware, AnyAction} from 'redux';
import { thunk } from 'redux-thunk';
import { ThunkDispatch } from 'redux-thunk';
import todoReducer, { TodoState } from './reducers';

export type AppDispatch = ThunkDispatch<TodoState, any, AnyAction>;

const store = createStore(
    todoReducer,
    applyMiddleware(thunk)
);

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;

export default store;