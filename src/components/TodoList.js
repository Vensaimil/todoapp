import React, { useState, useEffect,useReducer } from 'react';
import TodoForm from './TodoForm';
import TodoFilter from './TodoFilter';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  /* const [todos,setTodos] = useReducer(todoReducer, [], () => {
    const localData = localStorage.getItem('todos');
    return localData ? JSON.parse(localData) : [];
  }) */

 
  useEffect(()=> {
    const retrievedTodos = localStorage.getItem('todos');
    console.log(todos);
  },[])
  

  useEffect(()=> {
    localStorage.setItem('todos', JSON.stringify(todos));
  },[todos])


  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <TodoFilter setSearchTerm={setSearchTerm} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        searchTerm={searchTerm}
      />
    </>
  );
}

export default TodoList;