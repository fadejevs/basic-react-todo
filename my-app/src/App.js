import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';


let globalID = 0

function App() {

  const [task, setTask] = useState("")

  const [todos, setTodos] = useState([])

  function createTodo() {
      setTodos(oldTodos => { 
        setTask('')
        return [...oldTodos, {todo: task, id: globalID ++}]
      })
  }

  function checkForEnterKey (e) { 
    if (e.keyCode === 13) { 
      createTodo()
    }
  }


  function deleteItem(itemID) { 
    setTodos(oldTodos => oldTodos.filter(item => item.id !== itemID))
  }




  return (
    <div className='todo-container'>
      <h1>To Do</h1>
      <input
      onKeyDown={checkForEnterKey}
      type="text" 
      value={task} 
      onChange={e => { 
          setTask(e.target.value)
      }} />
      <button onClick={createTodo}>Create Task</button>

      <ul>
          {todos.map((item, index)  => {
            return <div key={item.id}>
                      <li>{item.todo}</li>
                      <button onClick={() => deleteItem(item.id)}>Delete</button>
                  </div>
          })}
      </ul>
      
    </div>
  );
}

export default App;
