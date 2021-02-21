import {useState} from 'react';
import {TodoForm} from './TodoForm';
import {Todo} from './Todo';

export const TodoList = () =>{
    const [todos,setTodos] = useState<Todo[]>([]);


    const addTodo = (todo:Todo) =>{
        const newTodos:Todo[] = [todo,...todos];
        setTodos(newTodos);
       // console.log(todo,...todos);
    }
    return(
        <div>
            <h3>TodoList</h3>
            <TodoForm onSubmit= {(todo:Todo) => addTodo(todo)}/>
            <Todo todos={todos}/>
        </div>
    );
}