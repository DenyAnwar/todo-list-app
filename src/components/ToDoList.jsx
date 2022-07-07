import { Checkbox, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";

const ToDoList = ({ todos, handleCheckBox }) => {
  return (
    <div className='todo-list'>
      <List>
        {
          todos.map((todo, id) => {
            return (
              <ListItem key={id} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <Checkbox checked={todo.complete} onChange={() => handleCheckBox(todo.id)} disableRipple />
                  </ListItemIcon>
                  <ListItemText primary={todo.task} class={ todo.complete ? "complete" : "" } />
                </ListItemButton>
              </ListItem>
            );    
          })
        }
      </List>
    </div>
  );
};

export default ToDoList;