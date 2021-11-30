/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-closing-tag-location */

import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import classes from './ToDoListForm.module.css';

function ToDoListForm(props) {
  const [task, setTask] = useState('');

  const onChange = (e) => {
    setTask(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (task.trim().length === 0) {
      window.alert('Please write item');
      return;
    }
    const newTask = {
      task,
      id: Math.floor(Math.random() * 1000) + 1,
      status: false,
    };
    // eslint-disable-next-line
    props.onSubmit(newTask);
    setTask('');
  };

  return (

    <form className={classes.form} onSubmit={submitHandler}>
      <input
        onChange={onChange}
        name="title"
        placeholder="Add todo..."
        className={classes.formInput}
        type="text"
        value={task}
      />
      <button type="submit" className={classes.inputSubmit}>
        <FaPlusCircle style={{ color: 'darkcyan', fontSize: '20px', marginTop: '2px' }} />
      </button>
    </form>
  );
}

export default ToDoListForm;
