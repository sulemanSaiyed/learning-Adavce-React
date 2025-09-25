function Buttons(){
const handleClick=(e)=>e.target.textContent="oo maiya";

return(<button onDoubleClick    ={(e)=>handleClick(e)}>Click me</button>)
}
export default Buttons