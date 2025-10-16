
import ComponenetC from "./ComponenetC";

function ComponenetB(props){


return(
<div className="box">
<h1>ComponeentB</h1>
<ComponenetC user={props.user}/>
</div>)
}
export default ComponenetB;