import { create } from 'zustand';
import { fetchTodosApi } from '../api/fakeApi';

// Типы для Todo
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

// Тип состояния store
export interface TodoState {
  todos: Todo[];
  loading: boolean;
  error: string | null;
}

// Тип действий store
interface TodoActions {
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  fetchTodos: () => Promise<void>;
  resetError: () => void;
}

// Объединенный тип store
type TodoStore = TodoState & TodoActions;

// Начальное состояние
const initialState: TodoState = {
  todos: [],
  loading: false,
  error: null,
};

// Создание Zustand store
export const useAppStore = create<TodoStore>((set) => ({
  ...initialState,

  // Добавление новой задачи
  addTodo: (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
    };
    set((state) => ({
      todos: [...state.todos, newTodo],
    }));
  },

  // Переключение статуса задачи
  toggleTodo: (id: number) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  },

  // Асинхронная загрузка задач
  fetchTodos: async () => {
    set({ loading: true, error: null });
    try {
      const todosText = await fetchTodosApi();
      const baseTime = Date.now();
      const todos: Todo[] = todosText.map((text: string, index: number) => ({
        id: baseTime + index,
        text,
        completed: false,
      }));
      set({ todos, loading: false, error: null });
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Неизвестная ошибка';
      set({ loading: false, error: errorMessage });
    }
  },

  // Сброс ошибки
  resetError: () => {
    set({ error: null });
  },
}));

