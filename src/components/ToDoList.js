import React, { useState } from 'react';
import ToDoListItem from './ToDoListItem';
import classes from './ToDoList.module.css';
import ToDoListForm from './ToDoListForm';

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const onSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteHandler = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  return (
    <div className={classes.container}>
      <p className={classes.p}> TODOS </p>
      <ToDoListForm onSubmit={onSubmit} />
      {tasks.map((task) => (
        <ToDoListItem
          deleteHandler={() => deleteHandler(task.id)}
          task={task.task}
          key={task.id}
        />
      ))}
    </div>
  );
}

export default ToDoList;
