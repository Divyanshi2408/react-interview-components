import React from 'react';
import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([])
  const [input,setInput] = useState("")
  const [error,setError] = useState("")
  const [editIndex,setEditIndex] = useState(null)
  const [filter,setFilter] = useState("All")
  
  const handleinputChange = (e) =>{
    setInput(e.target.value)
    setError("")
  }
  
  const handleaddOrUpdate = () =>{
    if(input.trim() === ""){
      setError("enter something")
      return;
    }
    if(editIndex !== null){
      const updateTodos = [...todos]
      updateTodos[editIndex].text = input;
      setTodos(updateTodos)
      setEditIndex(null)
    }else{
    setTodos([...todos,{text:input, completed:false}])}
    setInput("")
  }
  
  const handleEdit =(index) =>{
    setInput(todos[index].text);
    setEditIndex(index)
  }
  
  const handleDelete =(index) =>{
    const updateTodos = todos.filter((_,i) => i !== index)
    setTodos(updateTodos)
    if(editIndex === index){
      setInput("")
      setEditIndex(null)
    }
  }
  
  const todoComplete = (index) =>{
    const updatedTodos = [...todos]
    updatedTodos[index].completed = !updatedTodos[index].completed
    setTodos(updatedTodos)
  }
  
  const filterTodos = todos.filter((todo)=>{
    if(filter === "Completed") return todo.completed;
    if(filter === "Not completed") return !todo.completed;
    return true;
  })

  return (
    <div>
      <h1>Todo</h1>
      <input 
      type="text"
      value={input}
      placeholder="enter text"
      onChange={handleinputChange}
      ></input>
      <button onClick={handleaddOrUpdate}>{editIndex !== null ? "Update" : "Add"}</button>
      <label>Filter:</label>
      <select value={filter} onChange={(e)=>setFilter(e.target.value)}>
        <option>All</option>
         <option>Completed</option>
          <option>Not completed</option>
      </select>
      {error && <p style={{color:'red'}}>{error}</p>}
      
      {filterTodos.length >0 ? (
      <table border="1" cellPadding="4">
        <thead>
          <tr>
            <th>#</th>
            <th>todo</th>
            <th>filter</th>
            <th>changes</th>
          </tr>
        </thead>
        <tbody>
        {filterTodos.map((todo,index)=>(
          <tr key={index} >
            <td>{index+1}</td>
          <td style={{textDecoration: todo.completed ? "line-through" : "none"}}>{todo.text}</td>
          <td>
            <input
            type="checkbox"
            checked={todo.completed}
            onChange={()=>todoComplete(todos.indexOf(todo))}></input>
          </td>
          
          <td><button onClick={()=>handleDelete(index)}>Delete</button>
          <button onClick={()=>handleEdit(index)}>Update</button>
          </td>
          </tr>
         
        ))}
        </tbody>
      </table>
      ):(
      <p>no</p>)}
    </div>
  )
}

export default App;
