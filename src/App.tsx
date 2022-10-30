import React, { FC, useState } from 'react';
import './App.css';
import { FilterTodos } from './components/filtersTodos/FilterTodos';
import { AddTodo } from './components/todo\'s/AddTodo';
import { ITodos } from './models/ITodos';

const App: FC = () => {
  const [todos, setTodos] = useState<ITodos[]>([]);
  const [countCompleted, setCount] = useState(0);
  const [copyTodos, setCopyTodos] = useState<ITodos[]>(todos);

  const setCountCompleted = () => {
    setCount(0);
    todos.filter(item => {
      if(item.completed === false) {
        setCount(prev => prev += 1);
      } 
    })
  }

  return (
    <div className="App">
        <p>todos</p>
        <AddTodo 
          setCountCompleted={setCountCompleted}
          todos={todos} 
          setTodos={setTodos}
          setCopyTodos={setCopyTodos}
        />
        <div>
          <FilterTodos 
            countCompleted={countCompleted} 
            todos={todos}
            setTodos={setTodos}
            setCopyTodos={setCopyTodos}
            copyTodos={copyTodos}
          />
        </div>
    </div>
  );
}

export default App;
