import * as React from 'react';
import { ListItem, Checkbox, Button, ListItemText } from "@material-ui/core";

interface Props{
    todo: Todo;
    removeTodo :(id:number) => void;
    toggleComplete :(id:number) => void;
    editTodo:(id:number) => void;
}


export const Todo: React.FC<Props> = (props) =>{
    const handleRemoveTodo = () =>{
        props.removeTodo(props.todo.taskId);
    }

    const handleCheckboxClick = () =>{
      props.toggleComplete(props.todo.taskId);
    }

    const handleEditTodo = () =>{
      props.editTodo(props.todo.taskId);
    }
    return (
      <ListItem style={{ display: "flex" }}>
        <Checkbox 
          checked={props.todo.isCompleted} 
          onClick={() => handleCheckboxClick()}
        />
        <ListItemText
          style={{
            textDecoration: props.todo.isCompleted ? "line-through" : undefined,
          }} 
        >
          {props.todo.taskDescription}
        </ListItemText>
        <Button variant="outlined" color="primary" onClick={() => handleEditTodo()}>Edit</Button>
        <Button variant="outlined" color="secondary" onClick={() => handleRemoveTodo()}>
          Delete
        </Button>
      </ListItem>
    );
}