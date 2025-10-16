
import { useState } from "react";
import ComponenetB from "./ComponenetB";

function ComponenetA(){

  const [user, setUser]=useState("Pandu");
return(
<div className="box">
<h1>ComponeentA</h1>
<h2>{`Hellow ${user}`}</h2>
<ComponenetB user={user}/>
</div>)
}
export default ComponenetA;