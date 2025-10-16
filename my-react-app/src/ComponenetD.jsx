
import React,{useContext} from "react";
import { UserContext } from "./ComponenetA";

function ComponenetD(props){

const user= useContext(UserContext);

return(
<div className="box">
<h1>ComponeentD</h1>
<h2>{`Bye ${user}`}</h2>

</div>)
}
export default ComponenetD;