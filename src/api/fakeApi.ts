// Fake API для имитации асинхронных запросов

export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

// Имитация задержки сети
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Фейковые данные для тестирования
const fakeTodos: string[] = [
    'Помыть посуду',
    'Убраться в комнате',
    'Купить продукты',
    'Позвонить маме',
    'Выучить React'
];

/**
 * Имитация API запроса для получения списка задач
 * @returns Promise с массивом текстов задач
 */
export const fetchTodosApi = async (): Promise<string[]> => {
    await delay(1000); // Имитация задержки сети
    
    // Имитация случайной ошибки (10% вероятность)
    if (Math.random() > 0.9) {
        throw new Error('Ошибка загрузки задач. Попробуйте позже.');
    }
    
    return Promise.resolve(fakeTodos);
};

/**
 * Имитация API запроса для добавления задачи
 * @param text - текст задачи
 * @returns Promise с созданной задачей
 */
export const addTodoApi = async (text: string): Promise<Todo> => {
    await delay(500); // Имитация задержки сети
    
    return Promise.resolve({
        id: Date.now(),
        text,
        completed: false
    });
};

/**
 * Имитация API запроса для обновления задачи
 * @param id - идентификатор задачи
 * @param completed - статус выполнения
 * @returns Promise с обновленной задачей
 */
export const updateTodoApi = async (id: number, completed: boolean): Promise<Todo> => {
    await delay(300); // Имитация задержки сети
    
    return Promise.resolve({
        id,
        text: '',
        completed
    });
};

