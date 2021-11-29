import React, { useState } from 'react'
import classes from './ToDoListItem.module.css'
import { FaTrash } from "react-icons/fa";

function ToDoListItem({task, deleteHandler}) {
  const [status, setStatus] = useState (false)

  const statusHandler = () => {
   status?   setStatus(false) : setStatus(true)
  }


  return (
    <div  className = {classes.item}>
      <div className = {`${classes.itemLeft} ${status ? classes.completed : null}` }> 
        <input type="checkbox"  onChange= {statusHandler}/>
        <p className = {classes.p} contenteditable="true" >{task } </p>
      </div>
      <div>
        <button onChange= {statusHandler} onClick = {deleteHandler}> <FaTrash style={{color: "orangered", fontSize: "16px"}}/></button>
      </div>
    </div>
  )
}

export default ToDoListItem
