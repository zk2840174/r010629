

const TodoList = ({arr, removeFn, requestModifyTodo}) => {
  return ( 
  <div className="w-100 bg-red-200 justify-center items-center ">
    Todo List
    <ul>
      {arr.sort( (a, b)  => a.tno -b.tno).map(todo => 
      <li key={todo.tno} className="m-3 text-3xl p-3">
        {todo.tno} - {todo.title} 
        
        <button 
        className="bg-red-300 m-1 p-1"
        onClick={() => removeFn(todo.tno)}
        >
        DEL
        </button>

        <button 
        className="bg-red-300  m-1 p-1"
        onClick={() => requestModifyTodo(todo)}
        >
        MOD
        </button>
      </li>
      )}
    </ul>
  </div>
  );
}
 
export default TodoList;