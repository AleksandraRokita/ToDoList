import { useState } from 'react'
import { addTodo, toggleTodo, removeTodo } from './logic/todo.js'

function App() {
  const [todos, setTodos] = useState([])

  const handleAddTodo = () => {
    setTodos(addTodo(todos, 'Pierwsze zadanie'))
  }

  const handleToggleTodo = (id) => {
    setTodos(toggleTodo(todos, id))
  }

  const handleRemoveTodo = (id) => {
    setTodos(removeTodo(todos, id))
  }

  return (
    <div>
      <h1>To-Do App</h1>

      <button onClick={handleAddTodo}>
        Dodaj zadanie
      </button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span
              onClick={() => handleToggleTodo(todo.id)}
              style={{
                cursor: 'pointer',
                textDecoration: todo.done ? 'line-through' : 'none'
              }}
            >
              {todo.text}
            </span>

            <button
              onClick={() => handleRemoveTodo(todo.id)}
              style={{ marginLeft: '8px' }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
