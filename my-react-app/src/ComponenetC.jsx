
import ComponenetD from "./ComponenetD";

function ComponenetC(props){
return(
<div className="box">
<h1>ComponeentC</h1>
<ComponenetD user={props.user}/>
</div>)
}
export default ComponenetC;