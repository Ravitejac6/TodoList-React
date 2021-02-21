import {useState} from 'react';
import * as React from 'react';
import { Todo } from './Todo';
import { Button, TextField } from "@material-ui/core";

interface Props{
    onSubmit :(todo:Todo) => void;
}
export const TodoForm:React.FunctionComponent<Props> = (props) =>{
    const [input,setInput] = useState('');

    const handleSubmit = (e:React.FormEvent) =>{
        e.preventDefault();
        let todo:Todo ={
            id : Math.floor(Math.random()*10000),
            text : input
        } 
        props.onSubmit(todo);
        setInput('');
    }

    const handleChange = (e:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>{
       // console.log(e.target.value);
       setInput(e.target.value);
    }

    return(
        <div>
            <form onSubmit = {(e) =>handleSubmit(e)}>
                <TextField type="text" placeholder="Enter the task" onChange={(e) => handleChange(e)} value={input}/>
                <Button> Add Todo</Button>
            </form>
            <p>Input text :{input}</p>
        </div>
    );
}