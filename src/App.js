import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useRef, useEffect } from "react";
import {nanoid as id } from 'nanoid';
import Profile from './components/Profile';
import Navegacion from './components/navegacion';
import Academics from './components/Academics';
import Portfolio from './components/Portfolio';
import Random from './components/Random';
import TodoList from './components/TodoList';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const KEY = 'tareas.todos';

function App() {
  const [todos, setTodos] = useState([]);

  const todoRef = useRef();

  
  useEffect(() => {
    const localTodos =  JSON.parse(localStorage.getItem('KEY'));
    if(localTodos) {
      setTodos(localTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('KEY', JSON.stringify(todos))
  }, [todos]);

  const toggleTodo = (id) => {
    const newTodos = [... todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  }

  const handleTodoNew = () => {
    const task = todoRef.current.value;
    if (task === '') return;

    setTodos((anterior) => {
      return [... anterior, {id: id(), task, completed: false}];
    });
    todoRef.current.value = null;
  };
  
  const handleClearAll = () => {
    const newTodos = todos.filter((todo) => !todo.completed)
    setTodos(newTodos);
  }


  return (
      <Router>
        <div className="App">
        <Navegacion/>
        <Routes>
          <Route path='/' element={<Profile/>}/>
          <Route path="/academics" element={<Academics/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/random" element={<Random/>}/>
          <Route path="/tareas" element={
            <div>
              <TodoList todos={todos} toggleTodo={toggleTodo}/> 
              <br/><br/>
              <input class="form-control" ref={todoRef} type="text" placeholder='Nueva Tarea'/>

              <button onClick={handleTodoNew}>&#10004;</button>
              <button onClick={handleClearAll}>&#10008;</button>
              <br/><br/>
              <div class="form-control">Te quedan {todos.filter((todo) => !todo.completed).length} tareas</div>
            </div>
          }/>
        </Routes>
        </div>
      </Router>
  );
}

export default App;
