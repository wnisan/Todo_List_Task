import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, fetchTodos } from './store/actions';
import { AppDispatch, RootState } from './store';
import TodoList from './components/TodoList';
import './App.css';
import './components/Add_Todo.css';
import './components/Loading.css';

const App: React.FC = () => {
    const [text,setText] = useState('');
    const dispatch = useDispatch<AppDispatch>(); // Хук для отправки действий
    const {loading, error} = useSelector((state: RootState) => state); // Хук для получения состояния

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(text.trim()) {
            dispatch(addTodo(text));
            setText('');
        }
    };

    return(
    <div className="app">
      <h1 className="app-title">Todo List</h1>

      <div className="app-content">
        <form className="todo-form" onSubmit={handleSubmit}>
          <input
            className="todo-input"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}  
            placeholder="Добавьте новую задачу"
          />
          <button className="add-button" type="submit">Добавить</button>
        </form>

        <button 
          className="load-todos-button"
          onClick={() => dispatch(fetchTodos())}
        >
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