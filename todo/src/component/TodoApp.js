import React, { useReducer, useState } from 'react';

// Reducer function
const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, { id: Date.now(), text: action.payload }];
        case 'TOGGLE_TODO':
            return state.map(todo =>
                todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
            );
        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== action.payload);
        default:
            return state;
    }
};

const TodoApp = () => {
    const [inputValue, setInputValue] = useState('');
    const [todos, dispatch] = useReducer(todoReducer, []);

    const handleInputChange = e => {
        setInputValue(e.target.value);
    };

    const handleAddTodo = e => {
        e.preventDefault();
        if (inputValue.trim() === '') return;
        dispatch({ type: 'ADD_TODO', payload: inputValue });
        setInputValue('');
    };

    const handleToggleTodo = id => {
        dispatch({ type: 'TOGGLE_TODO', payload: id });
    };

    const handleDeleteTodo = id => {
        dispatch({ type: 'DELETE_TODO', payload: id });
    };

    return (
        <div>
            <form onSubmit={handleAddTodo}>
                <input type="text" value={inputValue} onChange={handleInputChange} />
                <button type="submit">Add Todo</button>
            </form>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <span
                            style={{
                                textDecoration: todo.completed ? 'line-through' : 'none'
                            }}
                            onClick={() => handleToggleTodo(todo.id)}
                        >
                            {todo.text}
                        </span>
                        <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoApp;
