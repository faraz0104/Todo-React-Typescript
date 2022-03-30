import React from 'react'
import "./style.css"

interface Props{
    todo:string,
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleAdd:(e: React.FormEvent)=>void;
}    



const InputField =({todo,setTodo,handleAdd}:Props) => {
  return (
    <form className='input-form' onSubmit={(e)=>handleAdd(e)} >
        <input type="input"
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}
        placeholder="Enter a task" className='input-box' />
        <button type="submit" className='input-btn'> Add Task</button>
    </form>
  )
}

export default InputField