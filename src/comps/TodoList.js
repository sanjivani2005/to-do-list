import React, { useState } from 'react'; // Import useState

function TodoList() {
  const [inputText, setInputText] = useState(''); // Define initial state
  const [todos, setTodos] = useState([]); // Array to hold todo items

  const handleInputChange = (e) => {
    setInputText(e.target.value); // Update the input text on change
  };

  const handleAddTodo = () => {
    if (inputText.trim() !== '') {
      setTodos([...todos, inputText]); // Add new todo to the list
      setInputText(''); // Clear the input after adding
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((todo, todoIndex) => todoIndex !== index); // Remove the todo
    setTodos(newTodos); // Update the state
  };

  return (
    <div className='todo-container'>
      <div className='input-container'>
        <input
          type='text'
          className='input-box-todo'
          placeholder='Enter Your ToDo Tasks'
          value={inputText}
          onChange={handleInputChange}
        />
        <button className='add-btn' onClick={handleAddTodo}>+</button>
      </div>
      <ul className='todo-list'>
        {todos.map((todo, index) => (
          <li key={index} className='todo-item'>
            {todo}
            <button className='delete-btn' onClick={() => handleDeleteTodo(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

