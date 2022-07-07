import { Button } from "@mui/material";
import React, { useState } from "react";
import ToDoForm from "../components/ToDoForm";
import ToDoList from "../components/ToDoList";

const ToDo = () => {
  const [todos, setTodos] = useState([]);

  const handleClick = (todo) => {
    const newTodo = { id: todos.length + 1, task: todo, complete: false}
    setTodos([...todos, newTodo]);
  }

  const handleCheckBox = (id) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex(todo => todo.id === id);

    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
  }

  const handleDelete = () => {
    const newTodos = todos.filter((todo) => todo.complete === false);
    
    setTodos(newTodos);
  }

  return(
    <div className='todo'>
      <h2 className='title'>To-Do List</h2>
      <ToDoForm handleClick={handleClick} />
      <ToDoList todos={todos}  handleCheckBox={handleCheckBox}/>
      <Button variant="outlined" color="error" onClick={handleDelete}>Remove Selected</Button>
    </div>
  );
};

export default ToDo;