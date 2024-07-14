// import React from 'react'
// import { useState } from 'react'

// function TodoList() {
//     const [todos, setTodos] = useState([]);
//     const [inputValue, setInputValue] = useState('');
//     const [isShowAlert, setShowAlert] = useState(false);

//     setTimeout((setShowAlert), 3000); // На исчезание Alert 

//     // Это функция, которая устанавливает состояние inputValue равным значению поля ввода. Вызывается каждый раз, когда изменяется поле ввода.
//     function handleChange(e) {
//         setInputValue(e.target.value);
//     };
//     // Это функция, которая добавляет новую задачу в состояние todos и очищает состояние inputValue при отправке формы. Он вызывается при отправке формы.
//     function handleSubmit(e) {
//         e.preventDefault();
//         setTodos([...todos, inputValue]);
//         setInputValue('');
//         setShowAlert(true);
//     };
//     // Фунцкия удаления 
//     function handleDelete(index) {
//         const newTodos = [...todos]
//         newTodos.splice(index, 1);
//         setTodos(newTodos);
//     };
    
//     return (
//         <div>
//             <form>
//                 <input type='text'
//                     className="shadow appearance-none border rounded w-80 mr-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                     value={inputValue}
//                     onChange={handleChange} />
//                 <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-normal py-2 px-4 rounded" onClick={handleSubmit}>Add Task</button>
//             </form>
//             {isShowAlert && <div>Данные были добавлены:</div>}
//             <ul className='p-4'>
//                 {todos.map((todo, index) => (
//                     <li className='w-80 mr-4 py-2 px-3 '>
//                         <span
//                             className='mr-4 text-sm'
//                             key={index}>
//                             {todo}
//                         </span>
//                         <button
//                             className="bg-white hover:bg-gray-100 text-gray-800 font-normal py-2 px-4 border border-gray-400 rounded shadow"
//                             onClick={() => handleDelete(index)}>
//                             Delete
//                         </button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }

// export default TodoList;


