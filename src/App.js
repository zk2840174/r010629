import Counter from "./components/Counter";
import Counter2 from "./components/Counter2";
import Kiosk from "./components/Kiosk";
import Todo from "./components/todo";
import TodoInput from "./components/todo/TodoInput";
import ZCounter from "./components/zcounter";
import ZKiosk from "./components/zkiosk";
import SampleLayout from "./layout/SampleLayout";
import TemplatePage from "./layout/TemplatePage";


function App() {

  const obj = {title:'Title', content:'Content'}


  console.log(obj['title'])

  return (
    <div>
        <Todo></Todo>      
    </div>
  );
}

export default App;
