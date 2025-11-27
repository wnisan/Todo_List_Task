import { 
  ADD_TODO, 
  TOGGLE_TODO, 
  SET_TODOS,
  FETCH_TODOS_START,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_ERROR,
  TodoAction
} from './actions';

interface Todo {
    id: number,
    text: string,
    completed: boolean;
}

export interface TodoState {
    todos: Todo[],
    loading: boolean,
    error: string | null
}

const initialState: TodoState = {
    todos: [],
    loading: false,
    error: null
};


const todoReducer = (state = initialState, action: TodoAction): TodoState => {
    switch(action.type) {
        case ADD_TODO:
        const newTodo: Todo = {
        id: Date.now(),  
        text: action.payload.text,
        completed: false
      };
      return {
        ...state,
        todos: [...state.todos, newTodo]
      };

       case TOGGLE_TODO:
       return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id 
            ? { ...todo, completed: !todo.completed }  
            : todo
        )
      };

       case FETCH_TODOS_START:
      return {
        ...state,
        loading: true,
        error: null
      };

       case FETCH_TODOS_SUCCESS:
       return {
        ...state,
        loading: false,
        todos: action.payload.map((text: string, index: number) => ({
          id: index,
          text,
          completed: false
        }))
      };

       case FETCH_TODOS_ERROR:
       return {
        ...state,
        loading: false,
        error: action.payload
      };

      default:
        return state;
    }
};

export default todoReducer;