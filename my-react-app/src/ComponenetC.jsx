import React,{useContext} from "react";
import { UserContext } from "./ComponenetA";
import ComponenetD from "./ComponenetD";

function ComponenetC(){
   const user= useContext(UserContext);
return(
<div className="box">
<h1>ComponeentC</h1>
<h2>{`kyre ${user}`}</h2>
<ComponenetD />
</div>)
}
export default ComponenetC;