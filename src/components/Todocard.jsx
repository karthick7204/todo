import React from 'react'

export function TodoCard(props){
    const {children , handleDelete ,  index , handleledit} = props;
    return(
        <li className='todoItem' >
          {children}
        <div className='actionsContainer'>
                 <button onClick={()=>{
                   handleledit(index)
                 }}>
                     <i className="fa-solid fa-pen-to-square"></i>
                 </button>

                 <button onClick={()=>{
                    handleDelete(index)
                 }}>
                 <i className="fa-solid fa-trash"></i>
                 </button>

         </div>
              
        </li>
        
    )
}
