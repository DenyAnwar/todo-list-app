import { Button, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";

const ToDoForm = ({ handleClick }) => {
  const [todo, setTodo] = useState("");
  
  return (
    <div className='todo-form'>
      <p>~ Today I need to ~</p>
      <span>
        <TextField 
          label="Task"
          variant="outlined"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }} 
        />
        <Button 
          variant="contained"
          onClick={() => { 
            handleClick(todo);
            setTodo("");
          }}
        >
          Submit
        </Button>
      </span>
    </div>
  );
};

export default ToDoForm;