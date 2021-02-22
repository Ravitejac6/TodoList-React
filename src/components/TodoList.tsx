import {FunctionComponent} from 'react';
import {Todo} from './Todo';
import { List } from "@material-ui/core";


interface Props{
    todos: Todo[];
    removeTodo :(id:number) =>void;
    toggleComplete:(id:number)=>void;
    editTodo:(id:number) => void;
}
export const TodoList:FunctionComponent<Props> = (props) =>{
    
    return(
        <List>
        {
            props.todos.map((item:Todo) =>(
                <Todo 
                    key={item.id} 
                    todo={item} 
                    removeTodo={(id:number) => props.removeTodo(id)} 
                    editTodo={(id:number) => props.editTodo(id)}
                    toggleComplete={(id:number) => props.toggleComplete(id)}
                />
            ))
        }
        </List>
    );
}