import React, { useState } from 'react';

function ToDoList() {
  // Initial tasks set
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Handle input change
  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  // Add task function
  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTask("");
    }
  }

  // Delete task function
  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  // Move task up function
  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  // Move task down function
  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  // Return the component structure
  return (
    <div className="to-do-list">
      <h1>To-Do List</h1>

      <div>
        {/* Input field and Add button */}
        <input
          type="text"
          value={newTask}
          placeholder="Enter a task"
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>

        {/* Task list */}
        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <span className="text">{task}</span>
              <button className="delete-button" onClick={() => deleteTask(index)}>
                Delete
              </button>
              <button className="move-button" onClick={() => moveTaskUp(index)}>
                Up
              </button>
              <button className="move-button" onClick={() => moveTaskDown(index)}>
                Down
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default ToDoList;
