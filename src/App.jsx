import { useState } from 'react'
import './style.css'


/**
 * Funkcja dodająca nowe zadanie do listy.
 *
 * Przyjmuje aktualną tablicę zadań oraz tekst nowego zadania.
 * Nie modyfikuje oryginalnej tablicy (zasada niemutowalności).
 * Zwraca nową tablicę zawierającą wszystkie stare zadania
 * oraz nowy obiekt zadania dodany na końcu.
 *
 * @param {Array} todos - aktualna tablica zadań
 * @param {string} text - treść nowego zadania
 * @returns {Array} nowa tablica zadań
 */
const addTodo = (todos, text) => {
  return [...todos, { id: Date.now(), text, done: false }]
}

/**
 * Funkcja przełączająca status wykonania zadania.
 *
 * Dla każdego zadania w tablicy sprawdza, czy jego ID
 * jest równe ID przekazanemu jako argument.
 * Jeśli tak — zmienia wartość pola `done` na przeciwną.
 * Pozostałe zadania pozostają bez zmian.
 *
 * Funkcja nie modyfikuje oryginalnej tablicy.
 *
 * @param {Array} todos - aktualna tablica zadań
 * @param {number} id - identyfikator zadania do zmiany
 * @returns {Array} nowa tablica zadań
 */
const toggleTodo = (todos, id) => {
  return todos.map(todo => 
    todo.id === id ? { ...todo, done: !todo.done } : todo
  )
}

/**
 * Funkcja usuwająca zadanie z listy.
 *
 * Zwraca nową tablicę zawierającą tylko te zadania,
 * których identyfikator jest różny od podanego ID.
 *
 * Funkcja nie modyfikuje oryginalnej tablicy.
 *
 * @param {Array} todos - aktualna tablica zadań
 * @param {number} id - identyfikator zadania do usunięcia
 * @returns {Array} nowa tablica zadań
 */
const removeTodo = (todos, id) => {
  return todos.filter(todo => todo.id !== id)
}


function App() {
    
  /**
   * Stan przechowujący listę zadań.
   * Początkowo jest to pusta tablica.
   */
  const [todos, setTodos] = useState([])

  /**
   * Stan przechowujący aktualną wartość pola input.
   */
  const [inputValue, setInputValue] = useState('')


  /**
   * Funkcja obsługująca dodawanie nowego zadania.
   *
   * Sprawdza, czy pole input nie jest puste.
   * Jeśli zawiera tylko białe znaki — funkcja kończy działanie.
   * W przeciwnym wypadku:
   * - dodaje nowe zadanie
   * - czyści pole input
   */
  const handleAddTodo = () => {
    if (inputValue.trim() === '') return
    setTodos(addTodo(todos, inputValue))
    setInputValue('')
  }

  /**
   * Funkcja obsługująca zmianę statusu zadania (wykonane / niewykonane).
   *
   * Wywołuje czystą funkcję `toggleTodo`,
   * a następnie aktualizuje stan aplikacji.
   *
   * @param {number} id - identyfikator zadania
   */
  const handleToggleTodo = (id) => {
    setTodos(toggleTodo(todos, id))
  }
  /**
   * Funkcja obsługująca usuwanie zadania z listy.
   *
   * Wywołuje czystą funkcję `removeTodo`,
   * a następnie aktualizuje stan aplikacji.
   *
   * @param {number} id - identyfikator zadania
   */
  const handleRemoveTodo = (id) => {
    setTodos(removeTodo(todos, id))
  }
  /**
   * Funkcja obsługująca naciśnięcie klawisza w polu input.
   *
   * Jeśli użytkownik naciśnie klawisz Enter,
   * zostanie wywołana funkcja dodająca nowe zadanie.
   *
   * @param {KeyboardEvent} e - zdarzenie klawiatury
   */
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo()
    }
  }

  return (
    <div className="app-container">
      <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      
      {/* Decorative pixels */}
      <div className="decoration decoration-1">✨</div>
      <div className="decoration decoration-2">💖</div>
      <div className="decoration decoration-3">⭐</div>
      <div className="decoration decoration-4">✨</div>

      {/* Main container */}
      <div className="main-card">
        {/* Title */}
        <h1 className="title">To-Do App</h1>
        
        <div className="subtitle">💖 stay organized 💖</div>

        {/* Input section */}
        <div className="input-section">
          <input
            type="text"
            placeholder="new task..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            className="task-input"
          />
          <button onClick={handleAddTodo} className="add-button">
            + Add
          </button>
        </div>

        {/* Todo list */}
        <div className="todo-list-container">
          {todos.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">✨</div>
              <div>no tasks yet!</div>
              <div className="empty-subtext">add one to get started</div>
            </div>
          ) : (
            <ul className="todo-list">
              {todos.map((todo, index) => (
                <li key={todo.id} className="todo-item">
                  <span
                    onClick={() => handleToggleTodo(todo.id)}
                    className={`todo-text ${todo.done ? 'done' : ''}`}
                  >
                    {todo.done ? '○ ' : '○ '}
                    {todo.text}
                  </span>
                  <button
                    onClick={() => handleRemoveTodo(todo.id)}
                    className="delete-button"
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

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