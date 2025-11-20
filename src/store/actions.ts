import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { fetchTodosApi } from '../api/fakeApi';

// Action Types
export const ADD_TODO = 'ADD_TODO' as const;
export const TOGGLE_TODO = 'TOGGLE_TODO' as const;
export const SET_TODOS = 'SET_TODOS' as const;
export const FETCH_TODOS_START = 'FETCH_TODOS_START' as const;
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS' as const;
export const FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR' as const;

// Action Type Interfaces
export interface AddTodoAction {
    type: typeof ADD_TODO;
    payload: { text: string };
}

export interface ToggleTodoAction {
    type: typeof TOGGLE_TODO;
    payload: { id: number };
}

export interface FetchTodosStartAction {
    type: typeof FETCH_TODOS_START;
}

export interface FetchTodosSuccessAction {
    type: typeof FETCH_TODOS_SUCCESS;
    payload: string[];
}

export interface FetchTodosErrorAction {
    type: typeof FETCH_TODOS_ERROR;
    payload: string;
}

export type TodoAction = 
    | AddTodoAction 
    | ToggleTodoAction 
    | FetchTodosStartAction 
    | FetchTodosSuccessAction 
    | FetchTodosErrorAction;

// Action Creators (синхронные)
export const addTodo = (text: string) => ({
    type: ADD_TODO,
    payload: {text}
});

export const toggleTodo = (id: number) => ({
    type: TOGGLE_TODO,
    payload: { id }
});

// Action Creator (асинхронный) с использованием redux-thunk и fake API
export const fetchTodos = () => {
    return async (dispatch: ThunkDispatch<any, any, AnyAction>) => {
        dispatch({type: FETCH_TODOS_START});

        try {
            // Использование fake API вместо прямого Promise
            const todos = await fetchTodosApi();

            dispatch({
                type: FETCH_TODOS_SUCCESS,
                payload: todos
            });
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Неизвестная ошибка';
            dispatch({
                type: FETCH_TODOS_ERROR,
                payload: errorMessage
            });
        }
    }
}