import { useState } from 'react'
import TodoList from './components/TodoList'
import { useTodos } from './hooks/useTodos'
import './style.css'

function App() {
  /**
   * Logika To-Do pochodzi z custom hooka.
   */
  const { todos, addTodo, toggleTodo, removeTodo } = useTodos()

  /**
   * Stan lokalny przechowujący wartość pola input.
   */
  const [inputValue, setInputValue] = useState('')

  /**
   * Obsługa dodawania nowego zadania.
   */
  const handleAddTodo = () => {
    if (inputValue.trim() === '') return

    addTodo(inputValue)
    setInputValue('')
  }

  /**
   * Obsługa zmiany statusu zadania.
   */
  const handleToggleTodo = (id) => {
    toggleTodo(id)
  }

  /**
   * Obsługa usuwania zadania.
   */
  const handleRemoveTodo = (id) => {
    removeTodo(id)
  }

  /**
   * Obsługa klawisza Enter w polu input.
   */
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo()
    }
  }

  return (
    <div className="app-container">
      {/* USUŃ tag <link> stąd */}

      {/* Decorative pixels */}
      <div className="decoration decoration-1">✨</div>
      <div className="decoration decoration-2">💖</div>
      <div className="decoration decoration-3">⭐</div>
      <div className="decoration decoration-4">✨</div>

      {/* Main container */}
      <div className="main-card">
        <h1 className="title">To-Do App</h1>
        <div className="subtitle">💖 stay organized 💖</div>

        {/* Input section */}
        <div className="input-section">
          <input
            type="text"
            placeholder="new task..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}  // ← ZMIANA TUTAJ
            className="task-input"
          />
          <button onClick={handleAddTodo} className="add-button">
            + Add
          </button>
        </div>

        {/* Todo list */}
        <TodoList
          todos={todos}
          onToggle={handleToggleTodo}
          onRemove={handleRemoveTodo}
        />

        {/* Stats */}
        {todos.length > 0 && (
          <div className="stats">
            {todos.filter(t => t.done).length} / {todos.length} completed ⭐
          </div>
        )}
      </div>
    </div>
  )
}

export default App
