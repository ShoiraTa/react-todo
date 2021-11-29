import React, {useState} from 'react'
import classes from './ToDoListForm.module.css' 
import { FaPlusCircle } from "react-icons/fa";

function ToDoListForm({onSubmit}) {
  const [task, setTask] = useState('')

  const onChange = (e) => {
    setTask(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    if(task.trim().length === 0 ){
      window.alert("Please write item")
      return
    }
    const newTask = {
      task: task,
      id: Math.floor(Math.random()*1000)+1,
      status: false
    }
    onSubmit(newTask)
    setTask("")
  }

  return (
    <form className={classes.form}  onSubmit ={submitHandler}>
      <input  
      onChange={onChange} 
      name="title"  
      placeholder="Add todo..." 
      className={classes.formInput} 
      type="text"
      value = {task}
      />
      <button type="submit" className={classes.inputSubmit}>
        <FaPlusCircle style={{ color: "darkcyan", fontSize: "20px", marginTop: "2px" }}/>
      </button>
    </form>
  )
}

export default ToDoListForm
