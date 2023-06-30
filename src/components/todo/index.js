import { useState } from "react";
import TemplatePage from "../../layout/TemplatePage";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoRead from "./TodoRead";


const Todo = () => {

  const [todoArr, setTodoArr] = useState([])
  const [target, setTarget] = useState(null)

  const addTodo = (newTodo) => {
    console.log("add Todo ", newTodo)

    setTodoArr([...todoArr,newTodo])
  }

  const removeTodo = (tno) => {
    console.log("removeTodo", tno)

    setTodoArr(todoArr.filter(todo => todo.tno !== tno ))
  }

  const requestModifyTodo = (todo) => {

    console.log("refquestModify Todo..........." ,todo)
    setTarget({...todo})
  }

  const modifyTodo = (todo) => {

    const removedList = todoArr.filter(ele => ele.tno !== todo.tno)

    setTodoArr([...removedList, todo])
    setTarget(null)
  }

  const requestAdd = () => {
    setTarget(null)
  }


  return (
  <TemplatePage>
    {target? 
      <TodoRead target={target} modifyTodo={modifyTodo} requestAdd={requestAdd}></TodoRead>
      :
      <TodoInput addTodo={addTodo}></TodoInput>
    }
    <TodoList arr={todoArr} removeFn={removeTodo} requestModifyTodo = {requestModifyTodo}></TodoList>
  </TemplatePage>  
  )
}
  
export default Todo;