
import { useState, createContext } from "react";
import ComponenetB from "./ComponenetB";

export const UserContext=createContext();

function ComponenetA(){

  const [user, setUser]=useState("Pandu");
return(
<div className="box">
<h1>ComponeentA</h1>
<h2>{`Hellow ${user}`}</h2>

<UserContext.Provider value={user}>

<ComponenetB user={user}/>

</UserContext.Provider>


</div>)
}
export default ComponenetA;