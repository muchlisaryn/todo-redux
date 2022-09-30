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
    <div className="d-flex justify-content-center">
      <div className='App'>
            <div className='fs-1 fw-bold'>TODO <span className='text-success'>REDUX</span></div>
            <InputTodo value={value} setValue={setValue}/>
            {todos?.map((e) => <ListTodos id={e.id} title={e.title} completed={e.completed} date={e.date} /> )}
      </div>
    </div>
  );
}

export default App;
