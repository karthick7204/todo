import React from 'react'
import { useState } from 'react';
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";



function App() {
  
const [todos,setTodos] = useState([
  
]);

function handleAddTodo(newTodo){
  if (newTodo.trim() === '') {  
    alert('Field is empty! Please enter a task.');
    return;
}
  const newtodolist =[...todos,newTodo];
  setTodos(newtodolist)
}
function handleDelete(index){
   const newtodolist = todos.filter((todo,todoIndex)=>{
      return todoIndex !== index
   })
   setTodos(newtodolist);
}

  return (
    
    <main>
     <TodoInput handleAddTodo={handleAddTodo}/>
     < TodoList handleDelete={handleDelete} todos ={todos}/>
     </main>
   
  )
}

export default App
