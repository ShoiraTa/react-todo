import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import classes from './ToDoListItem.module.css';

// eslint-disable-next-line
function ToDoListItem({ task, deleteHandler }) {
  const [status, setStatus] = useState(false);

  const statusHandler = () => {
    // eslint-disable-next-line
    status ? setStatus(false) : setStatus(true);
  };

  return (
    <div className={classes.item}>
      <div className={`${classes.itemLeft} ${status ? classes.completed : null}`}>
        <input type="checkbox" onChange={statusHandler} />
        <p className={classes.p} contentEditable="true">
          {task }
          {' '}
        </p>
      </div>
      <div>
        <button type="button" onChange={statusHandler} onClick={deleteHandler}>
          {' '}
          <FaTrash style={{ color: 'orangered', fontSize: '16px' }} />
        </button>
      </div>
    </div>
  );
}

export default ToDoListItem;
