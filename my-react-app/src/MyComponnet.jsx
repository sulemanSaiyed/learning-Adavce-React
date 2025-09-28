import React,{useState} from "react";


function MyComponnet(){

const[food, setFoods]=useState(["Apple","Banana", "chiku"
                          ]);


function handleAddFood(){
const newFood=document.getElementById("foodInput").value;
document.getElementById("foodInput").value="";
setFoods(f=>[...f,newFood])
}
function handleRemoveFood( index){
setFoods(food.filter((_, i)=>i!==index))
  
}
return(
  <>

<div>

<h2>List of foods</h2>
<ul>
  {
    food.map((food, index)=><li key={index}
    onClick={()=>handleRemoveFood(index)}>{food}</li>)
  }
</ul>
<input type="text" id="foodInput" placeholder="enter food name"/ >
<button onClick={handleAddFood}>Add food</button>
</div>


  </>
)
}
export default MyComponnet;