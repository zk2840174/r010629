import { useEffect, useState } from "react";
import { getTodo } from "../../api/todoAPI";


const initState = {
  tno:0,
  title:''
}

const Todo2Read = ({target}) => {

  const [todo,setTodo] = useState(initState)

  useEffect(() =>{

    getTodo(target).then(data => setTodo(data))


  },[target])

  return ( 
    <div>
      <div>Todo Read</div>
      <div>{target}</div>
      <div>{todo.tno}</div>
      <div>{todo.title}</div>
    </div>
  );
}
 
export default Todo2Read;