import { element } from "prop-types";
import React,{useState} from "react";


function MyComponnet(){

const [cars, setCars]=useState([]);
const [carYear, setCarYear]=useState(new Date().getFullYear());
const [carMake, setCarMake]=useState("");
const [carmodel, setModel]=useState("");

function handelAddCar(){
const newCar={year:carYear,
         make:carMake, 
       model:carmodel};

       setCars(c=>[...c, newCar]);

       setCarYear(new Date().getFullYear());
       setCarMake("");
       setModel("");
}

function handelRemoveCar(index){

setCars(c=>c.filter((_,ii)=>ii!==index));
}

function handelYearChange(e){
  setCarYear(e.target.value);



}
function handelMakeChange(e){
setCarMake(e.target.velue);
}

function handelModelhange(e){
setModel(e.target.value);
}

return (
  <div>
<h2>List of car objects</h2>
<ul>
{cars.map((car,index)=>
<li key={index} onClick={()=>handelRemoveCar(index)}>
  {car.year}{car.make}{car.model}




</li>


)}

</ul>
<input type="number"  value={carYear} onChange={handelYearChange}/><br />
<input type="text"  value={carMake} onChange={handelMakeChange}
placeholder=" enter car make"/><br />
<input type="text"  value={carmodel} onChange={handelModelhange}
placeholder=" enter car model"/><br /> 
<button onClick={handelAddCar}>Add car</button>
  </div>
 );

}
export default MyComponnet;