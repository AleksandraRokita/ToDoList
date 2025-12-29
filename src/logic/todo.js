/**
 * Funkcja przyjmuje starą tablicę zadań oraz tekst nowego zadania.
 * Nie modyfikuje oryginalnej tablicy.
 * Zwraca nową tablicę zawierającą wszystkie stare zadania
 * oraz jedno nowe zadanie dodane na końcu.
 *
 * @param {Array} todos - stara tablica zadań
 * @param {string} text - tekst nowego zadania
 * @returns {Array} nowa tablica zadań
 */
export const addTodo = (todos, text) => [
  ...todos,
  {
    id: Date.now(),
    text,
    done: false
  }
]

/**
 * Funkcja przełącza stan wykonania (`done`) jednego zadania na podstawie jego ID.
 * 
 * Przyjmuje starą tablicę zadań oraz identyfikator zadania do zmiany.
 * Nie modyfikuje oryginalnej tablicy.
 * Zwraca nową tablicę, w której tylko jedno zadanie
 * (o podanym ID) ma zmienioną wartość pola `done`
 * na przeciwną (true ↔ false).
 *
 * @param {Array} todos - stara tablica zadań
 * @param {number} id - identyfikator zadania do przełączenia
 * @returns {Array} nowa tablica zadań
 */
export const toggleTodo = (todos, id) =>
  todos.map(todo =>
    todo.id === id
      ? { ...todo, done: !todo.done }
      : todo
  )

/**
 * Funkcja usuwa jedno zadanie z listy na podstawie jego ID.
 *
 * Dla każdego elementu tablicy sprawdza warunek:
 * - jeśli ID zadania jest RÓŻNE od podanego ID → element zostaje (true)
 * - jeśli ID zadania jest RÓWNE podanemu ID → element jest usuwany (false)
 *
 * Funkcja nie modyfikuje oryginalnej tablicy.
 * Zwraca nową tablicę bez zadania o wskazanym ID.
 *
 * @param {Array} todos - stara tablica zadań
 * @param {number} id - identyfikator zadania do usunięcia
 * @returns {Array} nowa tablica zadań
 */

export const removeTodo = (todos, id) =>
  todos.filter(todo => todo.id !== id)


