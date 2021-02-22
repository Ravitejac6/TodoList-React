import React,{useState} from 'react';
import './App.css';
import { TodoList } from './components/TodoList';
import {TodoForm} from './components/TodoForm';

export const App = () => {
  const [todos,setTodos] = useState<Todo[]>([]);

    const addTodo = (todo:Todo) =>{
        const newTodos:Todo[] = [todo,...todos];
        setTodos(newTodos);
        console.log(todo,...todos);
    }

    const removeTodo = (id:number) =>{
      setTodos(todos.filter((todo) => todo.id !== id))
    } 

    const toggleComplete = (id:number) =>{
      setTodos(
        todos.map((todo) =>{
          if(todo.id === id){
            return{
              ...todo,
              isCompleted : !todo.isCompleted,
            }
          }
          return todo;
        })
      )
    }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm onSubmit= {(todo:Todo) => addTodo(todo)}/>
      <TodoList todos={todos} removeTodo={(id:number) => removeTodo(id)} toggleComplete={(id:number) => toggleComplete(id)}/>
    </div>
  );
}

export default App;
