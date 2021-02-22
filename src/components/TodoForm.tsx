import {useState} from 'react';
import * as React from 'react';
import { Button, TextField } from "@material-ui/core";

interface Props{
    onSubmit :(todo:Todo) => void;
}
export const TodoForm:React.FunctionComponent<Props> = (props) =>{
    let newTodo:Todo = {
        taskId:0,
        taskDescription:'',
        isCompleted:false,
    }
   const [input,setInput] = useState('');

    const[todo,setTodo] = useState<Todo>(newTodo);

    const handleSubmit = (e:React.FormEvent) =>{
        e.preventDefault();
        if(input.trim()){   // To avoid the empty string.
            let todo:Todo ={
                taskId : Math.floor(Math.random()*10000),
                taskDescription : input,
                isCompleted:false
            } 
            props.onSubmit(todo);
            setTodo({ ...todo, taskDescription: "" });
            setInput('');
        }
    }

    const handleInputChange = (e:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>{
        setTodo({...todo, taskDescription:e.target.value});
       // console.log(e.target.value);
       setInput(e.target.value);
    }

    return(
        <div>
            <form onSubmit = {(e) =>handleSubmit(e)}>
                <TextField 
                    type="text" 
                    placeholder="Enter the task" 
                    onChange={(e) => handleInputChange(e)} 
                    value={todo.taskDescription}
                />
                <Button type="submit" variant="contained" color="primary"> Add Todo</Button>
            </form>
            <p>Task :{todo.taskDescription}</p>
        </div>
    );
}