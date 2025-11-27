import React from 'react';
import { useAppStore, Todo } from '../store/store';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList: React.FC = () => {
    const todos = useAppStore((state) => state.todos);

    return (
        <div className="todo-list">
            <h2 className="todo-list-title">Мои задачи:</h2>
            {todos.length === 0 ? (
                <div className="empty-state">
                    <div className="empty-state-text">Нет задач</div>
                </div>
            ) : (
                <ul>
                    {todos.map((todo: Todo) => (
                        <TodoItem key={todo.id} todo={todo} />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TodoList;