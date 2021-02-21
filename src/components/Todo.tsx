import * as React from 'react';
import { ListItem, Checkbox, Button, ListItemText } from "@material-ui/core";

interface Props{
    todo: Todo;
    removeTodo :(id:number) => void;
}


export const Todo: React.FC<Props> = (props) =>{
    const handleRemoveTodo = () =>{
        props.removeTodo(props.todo.id);
    }
    return (
        <ListItem style={{ display: "flex" }}>
      <Checkbox/>
      <ListItemText>
        {props.todo.text}
      </ListItemText>
      <Button color="primary">Edit</Button>
      <Button color="secondary" onClick={() => handleRemoveTodo()}>
        Delete
      </Button>
    </ListItem>
    );
}