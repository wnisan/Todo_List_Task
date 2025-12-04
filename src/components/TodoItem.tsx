import React from 'react';
import { useAppStore, Todo } from '../store/store';
import './TodoItem.css';

interface TodoItemProps {
    todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
    const toggleTodo = useAppStore((state) => state.toggleTodo);

    const handleToggle = (): void => {
        toggleTodo(todo.id);
    };

    return (
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <input
                className="todo-checkbox"
                type="checkbox"
                checked={todo.completed}
                onChange={handleToggle}
            />
            <span className="todo-text">{todo.text}</span>
        </li>
    );
};

export default TodoItem;