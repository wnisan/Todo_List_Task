import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleTodo } from '../store/actions';
import './TodoItem.css';

interface TodoItemProps {
    todo: {
        id: number;
        text: string;
        completed: boolean;
    };
}

const TodoItem: React.FC<TodoItemProps> = ({todo}) => {
    const dispatch = useDispatch();

    return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        className="todo-checkbox"
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch(toggleTodo(todo.id))}  
      />
      <span className="todo-text">{todo.text}</span>
    </li>
    );
};

// PropTypes валидация для проверки props
TodoItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired
};

export default TodoItem;