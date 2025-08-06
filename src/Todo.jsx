// // import React,{useState} from "react";

// // const Todo = () => {
// //     const [todos, setTodos] = useState([]);
// //     const [input, setInput] = useState("");
// //     const [error, setError] = useState("");

// //     const handleTodoCHange = (e) =>{
// //         setInput(e.target.value);
// //         setError("");
// //     }
// //     const handleAddTodo = () =>{
// //         if(input.trim() === ""){
// //             setError('please enter a todo');
// //             return;
// //         }
// //         setTodos([...todos ,input]);
// //         setInput("");
// //     }
// //     const handleDeleteTodo = (index) =>{
// //         const newtodos = todos.filter((_, i)=> i !== index);
// //         setTodos(newtodos);
// //     }

// //     return(
// //         <div>
// //             <h1>Todo List</h1>
// //             <input 
// //                 type='text'
// //                 value={input}
// //                 onChange={handleTodoCHange}
// //                 placeholder="enter a todo"
// //             ></input>
// //             <button onClick={handleAddTodo}>Add Todo</button>
// //             {error && <p style={{color:'red'}}>{error}</p>}
// //             <ul>
// //                 {todos.map((todo,index) =>{
// //                     return (
// //                         <li key={index}>
// //                             {todo}
// //                             <button onClick={() => handleDeleteTodo(index)}>Delete</button>
// //                         </li>
// //                     )
// //                 })}
// //             </ul>
// //         </div>
// //     )
// // }

// // export default Todo;

// // import React, { useState } from "react";

// // const TodoApp = () => {
// //   const [todos, setTodos] = useState([]);
// //   const [input, setInput] = useState("");
// //   const [editIndex, setEditIndex] = useState(null);
// //   const [error, setError] = useState("");

// //   const handleInputChange = (e) => {
// //     setInput(e.target.value);
// //     setError("");
// //   };

// //   const handleAddOrUpdate = () => {
// //     if (input.trim() === "") {
// //       setError("Please enter a todo.");
// //       return;
// //     }

// //     if (editIndex !== null) {
// //       // Update existing todo
// //       const updatedTodos = [...todos];
// //       updatedTodos[editIndex] = input;
// //       setTodos(updatedTodos);
// //       setEditIndex(null);
// //     } else {
// //       // Add new todo
// //       setTodos([...todos, input]);
// //     }

// //     setInput("");
// //   };

// //   const handleEdit = (index) => {
// //     setInput(todos[index]);
// //     setEditIndex(index);
// //     setError("");
// //   };

// //   const handleDelete = (index) => {
// //     const updatedTodos = todos.filter((_, i) => i !== index);
// //     setTodos(updatedTodos);

// //     // If the item being edited is deleted
// //     if (editIndex === index) {
// //       setEditIndex(null);
// //       setInput("");
// //     }
// //   };

// //   return (
// //     <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}>
// //       <h2>Todo List</h2>

// //       <input
// //         type="text"
// //         placeholder="Enter todo"
// //         value={input}
// //         onChange={handleInputChange}
// //         style={{ padding: "8px", width: "70%" }}
// //       />
// //       <button onClick={handleAddOrUpdate} style={{ padding: "8px 12px", marginLeft: "8px" }}>
// //         {editIndex !== null ? "Update" : "Add"}
// //       </button>

// //       {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

// //       <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
// //         {todos.map((todo, index) => (
// //           <li key={index} style={{ marginBottom: "10px" }}>
// //             {todo}
// //             <button onClick={() => handleEdit(index)} style={{ marginLeft: "10px" }}>
// //               Edit
// //             </button>
// //             <button onClick={() => handleDelete(index)} style={{ marginLeft: "5px" }}>
// //               Delete
// //             </button>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default TodoApp;


// import React,{useState} from 'react'

// const Todo = () => {

//     const [todos, setTodos] = useState([]);
//     const [input, setInput] = useState("");
//     const [error, setError] = useState("");
//     const [editIndex, setEditIndex] = useState(null);

//     const handleInputChange = (e) => {
//         setInput(e.target.value);   
   
//     };
//     const handleAddOrUpdate = () =>{
//         if(input.trim() === ""){
//             setError("Please enter a todo.");
//             return;
//         }
//         setError(""); 
//         if (editIndex !== null){
//             const updatedTodos = [...todos];
//             updatedTodos[editIndex] = input;
//             setTodos(updatedTodos);
//             setEditIndex(null);
//          }
//          else{
//             setTodos([...todos,input])
//          }
//          setInput("");

//     }
//     const handleEdit = (index) => {
//         setInput(todos[index]);
//         setEditIndex(index);
//         setError("");
        
//     }
//     const handleDelete =(index) =>{
//         const updatedTodos = todos.filter((_,i) => i !== index);
//         setTodos(updatedTodos);
//         if(editIndex === index){
//             setEditIndex(null);
//             setInput("");
//         }
//     }

//   return (
//     <div>
//         <h2>Todo List</h2>
//         <input
//         type="text"
//         value={input}
//         onChange={handleInputChange}
//         placeholder='enter a todo'/>
//         <button onClick = {handleAddOrUpdate}>
//             {editIndex !== null ? "Update" : "Add"}
//         </button>

//         {error && <p>{error}</p>}
//         <ul>
//             {todos.map((todo,index) => (
//                 <li key={index}>{todo}
//                 <button onClick = {() => handleEdit(index)}>edit</button>
//                 <button onClick = {() => handleDelete(index)}>delete</button>
//                 </li>
//             ))}
//         </ul>



//     </div>
//   )
// }

// export default Todo

import React, { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("All");

  const handleAddTodo = () => {
    if (input.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInput("");
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleCompletion = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "Completed") return todo.completed;
    if (filter === "Incomplete") return !todo.completed;
    return true; // All
  });

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}>
      <h2>Todo List with Filter</h2>

      <input
        type="text"
        placeholder="Enter todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>

      <div style={{ marginTop: "20px" }}>
        <label>Filter: </label>
        <select value={filter} onChange={handleFilterChange}>
          <option>All</option>
          <option>Completed</option>
          <option>Incomplete</option>
        </select>
      </div>

      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {filteredTodos.map((todo) => (
          <li key={todo.id} style={{ marginBottom: "10px" }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleCompletion(todo.id)}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                marginLeft: "8px",
              }}
            >
              {todo.text}
            </span>
            <button
              onClick={() => handleDeleteTodo(todo.id)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
