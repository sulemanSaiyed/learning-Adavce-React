import React,{useState} from "react";


function ColorPicker(){

const [color,setColor]=useState("#FFFFFF");
 function handleColorChnage(e){
setColor(e.target.value);
 }

return(
  <>
<div className="color-picker-container">
  <h1>Color picker</h1>
  <div className="color-display" style={{backgroundColor:color}}> 
      <p>Selected colors :{color}</p>
      </div>
      <label htmlFor="">Select a color:</label>
      <input type="color" value={color}  onChange={handleColorChnage}/>




</div>




  </>
)
}
export default ColorPicker;