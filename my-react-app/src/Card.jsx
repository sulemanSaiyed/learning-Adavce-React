import profilePic from "./assets/sopp.jpg"

function Card(){
return(
<div className="card">

{/* <img src="https://via.placeholder.com/150" alt="my profile" /> */}

<img className="card-image"src={ profilePic} alt="my profile" /> 
<h2 className="card-title">Denzil</h2>
<p className="card-para">I make Youtube  videos and play videos games </p>


</div>



);
}

export default Card;