import { uuid } from 'uuidv4';

export default function reducer(state, action) {
  switch (action.type) {
    case 'TOOGLE_TODO':
      const toggledTodo = action.payload;
      const newTodos = state.todos.map(todo =>
        todo === toggledTodo
          ? { ...todo, complete: !toggledTodo.complete }
          : todo
      );
      return { ...state, todos: newTodos };

    case 'DELETE_TODO':
      const deletedTodo = action.payload;
      const filteredTodos = state.todos.filter(todo => todo !== deletedTodo);
      const isRemovedTodo =
        state.currentTodo.id === deletedTodo.id ? {} : state.currentTodo;
      return { ...state, todos: filteredTodos, currentTodo: isRemovedTodo };

    case 'ADD_TODO':
      const text = action.payload;
      if (!text) {
        return state;
      }

      if (
        state.todos.findIndex(
          todo => todo.text.trim().toLowerCase() === text.trim().toLowerCase()
        ) > -1
      ) {
        return state;
      }
      const newTodo = {
        id: uuid(),
        text,
        complete: false,
      };
      const addedTodos = [...state.todos, newTodo];
      return { ...state, todos: addedTodos };

    case 'SET_CURRENT_TODO':
      return { ...state, currentTodo: action.payload };

    case 'UPDATE_TODO':
      if (!action.payload) {
        return state;
      }

      if (
        state.todos.findIndex(
          todo =>
            todo.text.trim().toLowerCase() ===
            action.payload.trim().toLowerCase()
        ) > -1
      ) {
        return state;
      }
      const updatedTodo = { ...state.currentTodo, text: action.payload };
      const updatedTodoIndex = state.todos.findIndex(
        todo => todo.id === state.currentTodo.id
      );
      const updatedTodos = [
        ...state.todos.slice(0, updatedTodoIndex),
        updatedTodo,
        ...state.todos.slice(updatedTodoIndex + 1),
      ];

      return { ...state, currentTodo: {}, todos: updatedTodos };

    default:
      return state;
  }
}
