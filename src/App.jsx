import React from 'react'
import { useState } from 'react';
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";



function App() {
  
const [todos,setTodos] = useState([]);
const [todoValue, setTodoValue] = useState('')

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

function handleledit(index) {
  const valueToBeEdited = todos[index]
  setTodoValue(valueToBeEdited)
  handleDelete(index)
}
  return (
    
    <main>
     <TodoInput 
      todoValue={todoValue} 
      setTodoValue={setTodoValue} 
     handleAddTodo={handleAddTodo}/>
     < TodoList handleledit={handleledit} handleDelete={handleDelete} todos ={todos}/>
     </main>
   
  )
}

export default App
