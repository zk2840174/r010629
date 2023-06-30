import { useState } from "react";

const TodoRead = ({target,modifyTodo,requestAdd}) => {
  
  const [change, setChange] = useState(true)

  const handleChange = (e) => {
    target[e.target.name] = e.target.value
    setChange(!change)
  }

  return (
    <div>
      <div className="m-1 p-1">
        <input className="text-3xl" type="text" name="tno" value={target.tno} readOnly ></input>
      </div>
      <div className="m-1 p-1">
        <input  className="text-3xl"  type="text" name="title" value={target.title} onChange={handleChange} ></input>
      </div>
      <div className="m-1 p-1">
        <input  className="text-3xl"  type="text" name="content" value={target.content} onChange={handleChange} ></input>
      </div>
      <div>
        <button 
        className="bg-green-300 m-1 p-1"
        onClick={() => modifyTodo(target)}
        >MOD</button>
        <button className="bg-green-300 m-1 p-1"
        onClick={requestAdd}>NEW</button>
      </div>
    </div> 

  );
}
 
export default TodoRead;