import React, { useState, useEffect } from 'react';
import './App.css';

import ListItem from './components/Listitem';


function App() {
  const [fetchData, setFetchData] = useState(null);
  const [getFetch, setGetFetch] = useState(true);
  const [newTask, setNewTask] = useState(null);
  const [removeTask, setRemoveTask] = useState(null);
  const [changeTaskCompleted, setChangeTaskCompleted] = useState(null);
  const [id, setId] = useState(null);

  useEffect(() => {
    if (getFetch === true)
      fetch('http://localhost:6789/tasks')
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setFetchData(data)
          console.log(fetchData)
          setGetFetch(false)
        }, [getFetch]);
  });

  useEffect(() => {
    if (newTask !== null) {
      const fetchData = async () => {
        await fetch('http://localhost:6789/tasks', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newTask)
        }
        )
        return fetch
      }
      fetchData();
    }
  }, [newTask]);

  useEffect(() => {
    if (removeTask !== null) {
      const fetchData = async () => {
        await fetch(`http://localhost:6789/tasks/:${removeTask}`, {
          method: 'DELETE',
          body: JSON.stringify(removeTask)
        }
        )
        return fetch
      }
      fetchData();
    }
    setGetFetch(true)
    setRemoveTask(null)
  }, [removeTask]);

  useEffect(() => {
    if (changeTaskCompleted !== null) {
      const fetchData = async () => {
        await fetch(`http://localhost:6789/tasks/${id}/isCompleted`, {
          method: 'PATCH',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(changeTaskCompleted)
        }
        )
        return fetch;
      }
      fetchData();
    }
    setChangeTaskCompleted(null)
    setGetFetch(true)
  }, [changeTaskCompleted])

  const createTask = event => {
    setGetFetch(true);
    const target = event.target;
    const dataId = target.getAttribute('data-btn');
    const inputField = document.querySelector(`[data-inp="${dataId}"]`);
    if (inputField.value.length !== 0) setNewTask({ title: inputField.value })
    else (console.log("Your input field must not be empty!"));
    inputField.value = ""
  };

  const deleteTask = (id) => {
    console.log(`REMOVE ${id}`);
    setRemoveTask(id);
  };

  const checkTask = (isComplete, id) => {
    console.log(`CHECKED ${isComplete}, ${id}`);
    setChangeTaskCompleted({ isCompleted: !isComplete });
    setId(id);
  }

  return (
    <>
      <h1>ToDo List</h1>
      <div id="menu">
        <label>Your new to-do</label>
        <input type="text" placeholder="enter new task" data-inp="input" />
        <button onClick={createTask} data-btn="input">add task</button>
      </div>
      <div id="list">
        {/* <li style={{ display: 'inline' }}>
            buy milk
          </li>
          <button onClick={() => deleteTask(1)}>delete</button>
          <br></br> */}
        {fetchData !== null && <ListItem items={fetchData} remove={deleteTask} check={checkTask} />}
      </div>
    </>
  );
}

export default App;