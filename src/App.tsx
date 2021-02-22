import React,{useState,useEffect} from 'react';
import './App.css';
import { TodoList } from './components/TodoList';
import {TodoForm} from './components/TodoForm';


const LOCAL_STORAGE_KEY = 'react-to-do-list'
export const App = () => {
  const [todos,setTodos] = useState<Todo[]>([]);

  const[editItem, setEditItem] = useState<Todo|null>(null);

  // This useEffect is used for intial rendering.
  useEffect(()=>{
    const data = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(data){
      let todos_data = JSON.parse(data);
      console.log(todos_data);
      setTodos(todos_data);
    }
  },[])

  // This useEffect is used whenver there is a change in todos[].
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
      const item = todos.find((task) => task.taskId === id);
      if(item !== undefined){
        console.log(item);
        setEditItem(item);
      }
      else{
        setEditItem(null);
      }
    }

    const editTask = (text:string,id:number) =>{
      const newTasks:Todo[] = todos.map((task) => (task.taskId === id)? {taskDescription:text,taskId:id,isCompleted:false}: task);
      setTodos(newTasks);
      setEditItem(null);
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
      <div className="box">
      <h1>Todo App</h1>
      <TodoForm onSubmit= {(todo:Todo) => addTodo(todo)} editItem={editItem} editTask={(text:string,id:number) => editTask(text,id)}/>
      <TodoList 
        todos={todos} 
        removeTodo={(id:number) => removeTodo(id)} 
        toggleComplete={(id:number) => toggleComplete(id)}
        editTodo = {(id:number) => editTodo(id)}
      />
      </div>
    </div>
  );
}

export default App;
