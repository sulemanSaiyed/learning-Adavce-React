
import React,{useState, useEffect} from "react";

function MyComponent(){


  const[count, setCount]=useState(0);
  
  const[col, setColor]=useState("green");

  useEffect(()=>{
    console.log('effect run', count, col); 
document.title=`count:${count} ${col}`;
  },[count, col])

function addCount(){

setCount(c=>c+1)

}
function subCount(){

  setCount(c=>c-1)
  
  }

  function changeColor(){
    setColor(c=>c==="green"?"red":"green")
  }

  return(<>

  <p style={{color:col}}>Count:{count}</p>
  <button onClick={addCount}>ADD</button>
  <button onClick={subCount}>SUb</button><br />
  <button onClick={changeColor}>Change Color</button>
  </>)
}
export default MyComponent;