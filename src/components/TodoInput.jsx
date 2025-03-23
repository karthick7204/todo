import React from 'react'
import {useState} from 'react';


export default function TodoInput(props) {
  const { handleAddTodo, todoValue, setTodoValue } = props;
 // const [todoValue , settodovalue] = useState('')
  
  return (
    <header >
        <input value = {todoValue}
                
               onChange={(e)=>{
                setTodoValue(e.target.value)
               }}
               placeholder = "enter you work">

        </input>

        <button onClick={()=>{

          handleAddTodo(todoValue)
          setTodoValue("")
        }}> ADD  </button>

    </header>
  )
}
