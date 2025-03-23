import React from 'react'
import {useState} from 'react';


export default function TodoInput(props) {
  const {handleAddTodo} = props;
  const [todoValue , settodovalue] = useState('')
  
  return (
    <header >
        <input value = {todoValue}
                
               onChange={(e)=>{
                settodovalue(e.target.value)
               }}
               placeholder = "enter you work">

        </input>

        <button onClick={()=>{
          
          handleAddTodo(todoValue)
          settodovalue("")
        }}> ADD  </button>

    </header>
  )
}
