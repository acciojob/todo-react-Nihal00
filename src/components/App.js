
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);


  function update(e){
    e.preventDefault();

    if(input !== ""){
      setTodos([{id: new Date(), todos: input}, ...todos]);
    }
  }

  function del(id){
    let filtered = todos.filter((ele) => ele.id !== id);
    setTodos(filtered);
  }

  return (
    <div>
        <h3>To-Do List</h3>
        <form onSubmit={update}>
          <input type="text" onChange={(e) => setInput(e.target.value)} />
          <button type="submit">Add Todo</button>
        </form>


        <ul >
        {
          todos.map((ele) => 
            
              <li id={ele.id}>
                <p>{ele.todos}</p>
                <button onClick={ () => del(ele.id)}>Delete</button>
              </li>
          )
        }
        </ul>
    </div>
  )
}

export default App
