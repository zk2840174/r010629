

const Todo1Saver = ({saveAll}) => {
  return ( 
    <>
      <button className="w-full bg-blue-500 text-white text-3xl"
      onClick={saveAll}
      >Save All</button>
    </>
   );
}
 
export default Todo1Saver;