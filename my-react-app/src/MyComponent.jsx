
import React,{useState, useEffect} from "react";

function MyComponent(){

  const [width, setWidhth] =useState(window.innerWidth);
  const [height, setHeight] =useState(window.innerHeight);



useEffect(()=>  
 { window.addEventListener("resize", handleResize);
console.log("e added")

return()=>{
  window.removeEventListener("resize", handleResize);
  console.log("e removed")
}
}, []);

useEffect(()=>{
  document.title=`size: ${width}x${height} `;
},[width,height])

function handleResize(){
  setWidhth(window.innerWidth);
  setHeight(window.innerHeight)
}

  return(<>

  <p>Window width:{width}px</p>
  
  <p>Window Height:{height}px</p>
  </>)
}
export default MyComponent;