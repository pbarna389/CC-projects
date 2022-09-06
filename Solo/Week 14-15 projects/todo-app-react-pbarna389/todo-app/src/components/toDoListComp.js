import React from "react";

const ToDoListComp = ({ todo, todos, setTodos, index }) => {

    const completeTodo = index => {
        const newTodos = [...todos];
        !newTodos[index].isCompleted ?
            newTodos[index].isCompleted = true
            : newTodos[index].isCompleted = false
        setTodos(newTodos);
    };

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos)
    }

    return (
        <div
            className="todo"
            style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
            {todo.text}
            <div>
                <button onClick={() => completeTodo(index)}>Complete/Uncheck</button>
                <button onClick={() => removeTodo(index)}>Remove</button>
            </div>
        </div>

    )
}

export default ToDoListComp