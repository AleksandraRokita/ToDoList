import { useReducer } from 'react'
import { todoReducer } from '../utils/todoUtils'

/**
 * Custom hook zarządzający stanem listy To-Do.
 *
 * Odpowiada za:
 * - przechowywanie stanu
 * - dispatchowanie akcji
 * - udostępnianie API dla komponentów
 *
 * Logika aplikacji jest całkowicie oddzielona od widoku.
 */
export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, [])

  const addTodo = (text) => {
    dispatch({ type: 'ADD_TODO', payload: text })
  }

  const toggleTodo = (id) => {
    dispatch({ type: 'TOGGLE_TODO', payload: id })
  }

  const removeTodo = (id) => {
    dispatch({ type: 'REMOVE_TODO', payload: id })
  }

  return {
    todos,
    addTodo,
    toggleTodo,
    removeTodo
  }
}
