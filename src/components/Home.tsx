import React,{useState} from 'react'
import InputField from "./InputField"
import {Todo} from "../model"
import TodoList from "./TodoList"


const  Home:React.FC=()=> {

    const[todo,setTodo]=useState<string>("") 
    const[todos,setTodos]=useState<Todo[]>([])

    const handleAdd=(e: React.FormEvent)=>{
            e.preventDefault()
               
            if(todo){
                setTodos([...todos,{id:Date.now(),todo:todo,isDone:false}])  
                setTodo("")
            }
            
            console.log(todos)

    };   

    console.log(todos)  


  return (
    <div className='container'>
        <span className='heading'>Taskify</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
        <TodoList  todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default Home