function Buttons(){
const handleClick=()=>console.log("oi maiyya")

const handle2=(name)=>console.log(`o ${name}  bhaiya maar dalre`)
return(<button onClick={()=>handle2("Denzil")}>Click me</button>)
}
export default Buttons