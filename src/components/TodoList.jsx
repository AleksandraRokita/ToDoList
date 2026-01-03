/**
 * Komponent odpowiedzialny wyłącznie za renderowanie listy zadań.
 *
 * Nie posiada własnego stanu.
 * Nie zawiera logiki biznesowej.
 * Otrzymuje dane i callbacki przez propsy.
 *
 * view = f(state)
 */
function TodoList({ todos, onToggle, onRemove }) {
  return (
    <div className="todo-list-container">
      {todos.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">✨</div>
          <div>no tasks yet!</div>
          <div className="empty-subtext">add one to get started</div>
        </div>
      ) : (
        <ul className="todo-list">
          {todos.map(todo => (
            <li key={todo.id} className="todo-item">
              <span
                onClick={() => onToggle(todo.id)}
                className={`todo-text ${todo.done ? 'done' : ''}`}
              >
                ○ {todo.text}
              </span>

              <button
                onClick={() => onRemove(todo.id)}
                className="delete-button"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default TodoList
