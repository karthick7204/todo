import React from 'react'

export function TodoCard(props){
    const {children , handleDelete , index} = props;
    return(
        <li className='todoItem' >
          {children}
        <div className='actionsContainer'>
                 <button>
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