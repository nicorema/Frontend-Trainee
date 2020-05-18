import React, { useContext } from 'react';
import TodosContext from '../context';

export default function TodoList() {
  const { state, dispatch } = useContext(TodosContext);
  const title =
    state.todos.length > 0 ? `${state.todos.length} Todos` : 'Nothing To Do!';
  return (
    <div className='container mx-auto max-w-md text-center font-mono'>
      <h1 className='font-bold text-3xl'>{title}</h1>
      <ul className='text-white-400 p-0'>
        {state.todos.map(todo => (
          <li
            key={todo.id}
            className='flex items-center bg-orange-500 border-black border-dashed border-2 my-2 p-4'
          >
            <span
              onDoubleClick={() =>
                dispatch({ type: 'TOOGLE_TODO', payload: todo })
              }
              className={`cursor-pointer flex-1 ml-12 ${
                todo.complete && 'line-through text-grey-700'
              }`}
            >
              {todo.text}
            </span>
            <button
              onClick={() => dispatch({ type: 'SET_CURRENT_TODO', payload: todo })}
            >
              <img
                src='https://icon.now.sh/edit/0050c5'
                alt='Edit Icon'
                className='h-6'
              />
            </button>
            <button
              onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo })}
            >
              <img
                src='https://icon.now.sh/delete/8b0000'
                alt='Delete Icon'
                className='h-6'
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
