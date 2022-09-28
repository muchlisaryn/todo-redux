import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputTodo from './Component/InputTodo';
import ListTodos from './Component/ListTodos';
import { useSelector } from 'react-redux';

function App() {

  const [value, setValue]= useState("")
  const todos = useSelector((state) => state.todos.todos)

  console.log(todos)

  return (
    <div className="App">
      <header className="App-header">
          <h1>Todo list app in redux</h1>
          <InputTodo value={value} setValue={setValue}/>
          <ListTodos />
      </header>
      <div>

      </div>
    </div>
  );
}

export default App;
