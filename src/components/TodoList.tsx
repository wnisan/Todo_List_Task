import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList: React.FC = () => {
    const todos = useSelector((state: any) => state.todos);

    return(
      <div className="todo-list">
      <h2 className="todo-list-title">Мои задачи:</h2>
      {todos.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-text">Нет задач</div>
        </div>
      ) : (
        <ul>
          {todos.map((todo: any) => (
            <TodoItem 
              key={todo.id}
              todo={todo} 
            />
          ))}
        </ul>
      )}
    </div>
    );
};

export default TodoList;