
import React,{useState} from "react";

function Counter(){
  const [count, setCount]=useState(0);
  const increment=()=>{
    setCount(count+1);
  }
  const decrement=()=>{
    setCount(count-1);
  }
  const rset=()=>{
    setCount(0);
  }
  return(<>
  <div className="counter-contaioner">
    <p className="count-display">{count}</p>
    <button className=" counter-button"onClick={decrement}>Decrremnt</button>
    <button className=" counter-button"onClick={rset}>Reset</button>
    <button className=" counter-button"onClick={increment}>Incrrremnt</button>
  </div>
  
  </>)

} export default Counter;