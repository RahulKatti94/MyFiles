import React from 'react'
import "./todo.css"

const TodoList = (props) => {

  return (
    <>
        <div>
        <button className='btn-class-element'
        onClick={ ()=>{
            props.onSelect(props.id)  
        }}> X</button>
       
             <li className='ello'>{props.text}</li>
             </div>
                   


    </>
  )
}

export default TodoList