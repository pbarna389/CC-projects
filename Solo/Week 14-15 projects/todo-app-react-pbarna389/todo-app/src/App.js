import React, { useState } from "react";
import ToDoListComp from "./components/toDoListComp";
import FormComponent from "./components/formComponent"
import './App.css';

const App = () => {

  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false
    },
    {
      text: "Build a really cool app",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <div className="todo-list">
        {todos.map((element, index) =>
          <ToDoListComp
            key={index}
            index={index}
            todo={element}
            todos={todos}
            setTodos={setTodos} />)}
        <FormComponent addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
