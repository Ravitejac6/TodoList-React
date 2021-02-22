import React,{useState,useEffect} from 'react';
import './App.css';
import { TodoList } from './components/TodoList';
import {TodoForm} from './components/TodoForm';


const LOCAL_STORAGE_KEY = 'react-to-do-list'
export const App = () => {
  const [todos,setTodos] = useState<Todo[]>([]);


  useEffect(()=>{
    const data = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(data){
      let todos_data = JSON.parse(data);
      console.log(todos_data);
      setTodos(todos_data);
    }
  },[])
  useEffect(() =>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  },[todos])

    const addTodo = (todo:Todo) =>{
        const newTodos:Todo[] = [todo,...todos];
        setTodos(newTodos);
        console.log(todo,...todos);
    }

    const removeTodo = (id:number) =>{
      setTodos(todos.filter((todo) => todo.taskId !== id))
    } 

    const editTodo = (id:number) =>{
      todos.forEach((todo) =>{
        if(todo.taskId === id){
          console.log(todo);
        }
      })
    }

    // Whenever user clicks the checkBox then it toggles
    const toggleComplete = (id:number) =>{
      setTodos(
        todos.map((todo) =>{
          if(todo.taskId === id){
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
      <TodoList 
        todos={todos} 
        removeTodo={(id:number) => removeTodo(id)} 
        toggleComplete={(id:number) => toggleComplete(id)}
        editTodo = {(id:number) => editTodo(id)}
      />
    </div>
  );
}

export default App;
