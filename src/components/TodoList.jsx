import React from 'react';

export default function TodoList() {
  let todos =[
    "eat fiber everday",
    "do exercise everyday",
    "do leetcode"
]
  return (
   
    <ul>
      {todos.map((todo,todoIndex)=>{
          return(
            <li key={todoIndex}>{todo}</li>
          )
 } )}
    </ul>
  );
}
