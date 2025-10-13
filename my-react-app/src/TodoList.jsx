

import { element } from "prop-types";
import React,{useState} from "react";

function TodoList(){

const [tasks, setTasks]=useState([]);
const [newTask,setNewtask]=useState("");


function addTask(){

  if(newTask.trim()!==""){
    setTasks(t=>[...t, newTask]);
    setNewtask("");
  }}

function handelInputChnage(e){
setNewtask(e.target.value)
}


function deleteTask(index){
  const updateTask=tasks.filter((_, ii)=>ii!==index);
  setTasks(updateTask);


}

function moveTaskUp(index){
if(index>0){
  const updateTasks=[...tasks];
  [updateTasks[index],updateTasks[index-1]]=
  [updateTasks[index-1],updateTasks[index]];
setTasks(updateTasks);
}
}


function moveTaskDown(index){
  if(index<tasks.length-1){
    const updateTasks=[...tasks];
    [updateTasks[index],updateTasks[index+1]]=
    [updateTasks[index+1],updateTasks[index]];
  setTasks(updateTasks);
  }
}

return(

<div className="to-do-list" >

  <h1>TO-DO-LIST</h1>
  <div>

    <input type="text"  placeholder="enter a task..."
    value={newTask}
    onChange={handelInputChnage}


    />
    
    <button className="add-button" 
    onClick={addTask}>
      Add</button>
  </div>
  
<ol>
{tasks.map((task, index)=>
<li key={index}>
  <span className="text">{task}</span>
  <button className="delete-button" onClick={()=>deleteTask(index)}> 
    Delete
  </button>

  <button className="move-button" onClick={()=>moveTaskUp(index)}> 
    UP ☝
  </button>

  <button className="move-button" onClick={()=>moveTaskDown(index)}> 
    Down 👇
  </button>
</li>

)}

</ol>


</div>

);
}


export default TodoList;