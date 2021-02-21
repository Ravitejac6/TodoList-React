import * as React from 'react';
import { List } from "@material-ui/core";

interface Props{
    todos: Todo[];
}
export const Todo: React.FC<Props> = ({todos}) =>{
    return (
        <List>
        {
            todos.map((item:Todo) =>(
                <div className="todo-item" key={item.id}>{item.text}</div>
            ))
        }
        </List>
    );
}