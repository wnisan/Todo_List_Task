import React, { useState } from 'react';
import { useAppStore } from './store/store';
import TodoList from './components/TodoList';
import './App.css';
import './components/Add_Todo.css';
import './components/Loading.css';

const App: React.FC = () => {
    const [text, setText] = useState<string>('');
    const loading = useAppStore((state) => state.loading);
    const error = useAppStore((state) => state.error);
    const addTodo = useAppStore((state) => state.addTodo);
    const fetchTodos = useAppStore((state) => state.fetchTodos);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (text.trim()) {
            addTodo(text);
            setText('');
        }
    };

    const handleLoadTodos = (): void => {
        fetchTodos();
    };

    return (
        <div className="app">
            <h1 className="app-title">Todo List</h1>

            <div className="app-content">
                <form className="todo-form" onSubmit={handleSubmit}>
                    <input
                        className="todo-input"
                        type="text"
                        value={text}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
                        placeholder="Добавьте новую задачу"
                    />
                    <button className="add-button" type="submit">
                        Добавить
                    </button>
                </form>

                <button className="load-todos-button" onClick={handleLoadTodos}>
                    Загрузить тестовые задачи
                </button>

                {loading && (
                    <div className="loading">
                        <div className="loading-spinner"></div>
                        Загрузка...
                    </div>
                )}
                {error && <div className="error">Ошибка: {error}</div>}

                <TodoList />
            </div>
        </div>
    );
};

export default App;