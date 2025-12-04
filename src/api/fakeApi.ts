// Fake API для имитации асинхронных запросов
import { Todo } from '../store/store';

// Имитация задержки сети
const delay = (ms: number): Promise<void> => 
    new Promise<void>((resolve: () => void) => setTimeout(resolve, ms));

// Фейковые данные для тестирования
const fakeTodos: string[] = [
    'Помыть посуду',
    'Убраться в комнате',
    'Купить продукты',
    'Позвонить маме',
    'Выучить React'
];

// Имитация API запроса для получения списка задач
export const fetchTodosApi = async (): Promise<string[]> => {
    await delay(1000);
    return Promise.resolve<string[]>(fakeTodos);
};

// Имитация API запроса для добавления задачи
export const addTodoApi = async (text: string): Promise<Todo> => {
    await delay(500);
    const newTodo: Todo = {
        id: Date.now(),
        text,
        completed: false,
    };
    return Promise.resolve<Todo>(newTodo);
};

// Имитация API запроса для обновления задачи
export const updateTodoApi = async (id: number, completed: boolean): Promise<Todo> => {
    await delay(300);
    const updatedTodo: Todo = {
        id,
        text: '',
        completed,
    };
    return Promise.resolve<Todo>(updatedTodo);
};

