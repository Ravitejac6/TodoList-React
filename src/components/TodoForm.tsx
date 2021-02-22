import {useState,useEffect} from 'react';
import * as React from 'react';
import { Todo } from './Todo';
import { Button, TextField } from "@material-ui/core";

interface Props{
    onSubmit :(todo:Todo) => void;
}
export const TodoForm:React.FunctionComponent<Props> = (props) =>{
    let newTodo:Todo = {
        id:0,
        text:'',
        isCompleted:false,
    }
   const [input,setInput] = useState('');

    const[todo,setTodo] = useState<Todo>(newTodo);

    const handleSubmit = (e:React.FormEvent) =>{
        e.preventDefault();
        if(input.trim()){   // To avoid the empty string.
            let todo:Todo ={
                id : Math.floor(Math.random()*10000),
                text : input,
                isCompleted:false
            } 
            props.onSubmit(todo);
            setTodo({ ...todo, text: "" });
            setInput('');
        }
    }

    const handleInputChange = (e:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>{
        setTodo({...todo, text:e.target.value});
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
                    value={todo.text}
                />
                <Button type="submit" variant="contained" color="primary"> Add Todo</Button>
            </form>
            <p>Task :{todo.text}</p>
        </div>
    );
}