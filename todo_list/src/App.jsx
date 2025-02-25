import { useEffect, useState, useRef, useReducer, useMemo } from 'react'
import './App.css'


const todoReducer = (state, action) => {
  switch (action.type) {
      case 'ADD':
          return [...state, action.payload];
      case 'TOGGLE':
          return state.map(todo => 
              todo.id === action.payload ? {...todo, completed: !todo.completed} : todo
          );
      case 'DELETE':
          return state.filter(todo => todo.id !== action.payload);
      default:
          return state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    const storedTodos =JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) 
      dispatch({ type: 'SET', payload: storedTodos });
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const filteredTodos = useMemo(() => {
    return {
      incomplete: todos.filter(todo => !todo.completed),
      completed: todos.filter(todo => todo.completed)
    }
  }, [todos]);
  
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false
    };
    dispatch({ type: 'ADD', payload: newTodo });
    setInputValue('');
    inputRef.current.focus();
  }

  const handleToggleTodo = (id) => {
    dispatch({ type: 'TOGGLE', payload: id });
  }

  const handleDeleteTodo = (id) => {
    dispatch({type: 'DELETE', payload: id});
  }

  return (
    <>
      <div className='container mx-auto text-center'>
        <h1 className='font-bold text-3xl'>Todo List</h1>
        <form action="" onClick={(event) => handleAddTodo(event)}>
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter a new todo"
            className="border border-gray-400 rounded-xl p-2 w-70"
          />
          <button className='btn btn-danger border border-blue-400 hover:bg-blue-300 rounded-lg text-xl mx-3 p-3 ps-5 pe-5 w-20 font-bold shadow-lg cursor-pointer'>Add</button>
        </form>
        <div>
          <h2 className='font-bold text-xl underline'>Incomplete</h2>
          <ul className='w-100 mx-auto'>
            {filteredTodos.incomplete.map(todo => (
              <li key={todo.id} className='p-2 flex justify-between items-center w-100 text-lg'>
                <input type="checkbox" className='cursor-pointer' checked={todo.completed} onChange={() => handleToggleTodo(todo.id)} />
                <span
                  className='cursor-pointer'
                  onClick={() => handleToggleTodo(todo.id)}
                >
                  {todo.completed ? <s>{todo.text}</s> : todo.text}
                </span>
                <button onClick={() => handleDeleteTodo(todo.id)} className='border border-red-500 bg-red-500 hover:bg-red-400 cursor-pointer text-white rounded-lg p-2 mx-5'>Delete</button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className='font-bold text-xl underline'>Completed</h2>
          <ul className='w-100 mx-auto'>
            {filteredTodos.completed.map(todo => (
              <li key={todo.id} className='p-2 flex justify-between items-center w-100 text-lg'>
                <input type="checkbox" className='cursor-none' checked={todo.completed} />
                <span
                  className='cursor-text'
                >
                  {todo.completed ? <s>{todo.text}</s> : todo.text}
                </span>
                <button onClick={() => handleDeleteTodo(todo.id)}  className='border border-red-500 bg-red-500 hover:bg-red-400 cursor-pointer text-white rounded-lg p-2 mx-5'>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App;
