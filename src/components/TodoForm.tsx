import {useState,useEffect} from 'react';
import * as React from 'react';
import { Button, TextField } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';

interface Props{
    onSubmit :(todo:Todo) => void;
    editItem:Todo | null;
    editTask:(text:string, id:number) => void;
}
export const TodoForm:React.FunctionComponent<Props> = (props) =>{
    let newTodo:Todo = {
        taskId:0,
        taskDescription:'',
        isCompleted:false,
    }
   const [input,setInput] = useState('');

    const[todo,setTodo] = useState<Todo>(newTodo);

    // For initial rendering the text in the form should be empty
    useEffect(()=>{
        setTodo(newTodo);
    },[])

    // Whenever there is a change in the edit item we set it.
    useEffect(()=>{
        if(props.editItem!==null){
            //console.log(props.editItem.taskDescription);
            setTodo(props.editItem);
        }else{
            setInput('');
        }
    }, [props.editItem]);

    const handleSubmit = (e:React.FormEvent) =>{
        e.preventDefault();
        if(props.editItem===null){   // To avoid the empty string.
            let todo:Todo ={
                taskId : Math.floor(Math.random()*10000),
                taskDescription : input,
                isCompleted:false
            } 
            props.onSubmit(todo);
        }
        else{
            props.editTask(input,props.editItem.taskId);
        }
        setTodo({ ...todo, taskDescription: "" });
    }

    const handleInputChange = (e:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>{
        setTodo({...todo, taskDescription:e.target.value});
       // console.log(e.target.value);
       setInput(e.target.value);
    }


    return(
        <div className="todo-form">
            <form onSubmit = {(e) =>handleSubmit(e)}>
                <TextField 
                    type="text" 
                    placeholder="Enter the task" 
                    onChange={(e) => handleInputChange(e)} 
                    value={todo.taskDescription}
                />
                <Button type="submit" variant="contained" color="primary" startIcon={<AddIcon/>}>Add Todo</Button>
            </form>
            {/* <p>Task :{todo.taskDescription}</p> */}
        </div>
    );
}