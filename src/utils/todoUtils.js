/**
 * Reducer obsługujący logikę listy To-Do.
 *
 * Jest to CZYSTA funkcja:
 * - nie mdzyfikuje stanu wejściowego
 * - nie używa Reacta
 * - nie ma efektów ubocznych
 *
 * @param {Array} state - aktualny stan listy zadań
 * @param {Object} action - obiekt opisujący akcję
 * @returns {Array} nowy stan listy zadań
 */
export const todoReducer = (state, action) => {
  switch (action.type) {

    case 'ADD_TODO':
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload,
          done: false
        }
      ]

    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, done: !todo.done }
          : todo
      )

    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.payload)

    default:
      return state
  }
}
