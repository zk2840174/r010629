import { useState } from "react";


const Counter2 = () => {

  const [obj, setObj] = useState({num:10})


  return ( 
    <div className="h-[100vh] bg-cyan-400 w-full">
      {obj.num}
      <button onClick={() => {
        obj.num += 1
        console.log(obj.num)
        
        setObj({...obj})
        
      }} >INC</button>
    </div>
  );
}
 
export default Counter2;