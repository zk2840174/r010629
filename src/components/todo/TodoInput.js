import { useState } from "react";

const initState = {title:'', content:''}

let tno = 1

const TodoInput = ({addTodo}) => {

  const [obj, setObj] = useState({...initState})



  const handleChange = (e) => {
    obj[e.target.name] = e.target.value 
    setObj({...obj})
  }

  const handleAdd = () => {
    console.log(obj)
    addTodo({...obj, tno:tno++})
    setObj({...initState})
  }

  const handleClear = () => {
    setObj({...initState})
  }

  return ( 
    <div  className="w-100justify-center items-center ">

        <div className="m-1 p-1">
        <label>제목</label>
        <input 
        className="text-3xl"
        type='text'
        name='title' 
        value={obj.title}
        onChange={ handleChange }/>
      </div>
      <div className="m-1 p-1">
        <label>내용</label>
        <input 
        className="text-3xl"
        type='text'
        name='content' 
        value={obj.content}
        onChange={ handleChange}/>
      </div>
      <div>
        <button 
        className="bg-green-300 m-1 p-1" 
        onClick={handleAdd}>ADD</button>
        <button
        className="bg-green-300 m-1 p-1" 
        onClick={handleClear}>CLEAR</button>
      </div>
      
    </div>
  );
}
 
export default TodoInput;