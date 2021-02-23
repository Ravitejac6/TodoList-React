import {FunctionComponent} from 'react';
import {TodoComponent} from './TodoComponent';
import { List } from "@material-ui/core";


interface Props{
    todos: Todo[];
    removeTodo :(id:number) =>void;
    toggleComplete:(id:number)=>void;
    findTodo:(id:number) => void;
}
export const TodoList:FunctionComponent<Props> = (props) =>{
    
    return(
        <List>
        {
            props.todos.map((item:Todo) =>(
                <TodoComponent
                    key={item.taskId} 
                    todo={item} 
                    removeTodo={(id:number) => props.removeTodo(id)} 
                    findTodo={(id:number) => props.findTodo(id)}
                    toggleComplete={(id:number) => props.toggleComplete(id)}
                />
            ))
        }
        </List>
    );
}