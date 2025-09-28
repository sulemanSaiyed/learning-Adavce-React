import React,{useState} from "react";

function MyComponent(){

  const [name, setName]=useState("Guest");
  const[quatity, setQuantity]=useState();
const [comment, setCommnet]=useState();
const [payment, setPayment]=useState();
const [shipping, setShipping]=useState();

  function handleNameChange(e){
    setName(e.target.value);
  }
  function handleCommentChange(e){
    setCommnet(e.target.value);
  }
  function handleShippingChange(e){
    setShipping(e.target.value);
  }

  function handlePaymentChange(e){
    setPayment(e.target.value);
  }



  function handleQuantityChange(e){
    setQuantity(e.target.value);
  }

return(
  <>
<div>
<input value={name} onChange={handleNameChange} />
<p>Name:{name}</p>
<input value={quatity} onChange={handleQuantityChange} type="number"/>
<p>Quantity: {quatity}</p>

<textarea value={comment} onChange={handleCommentChange} placeholder="enter deliver instruction"></textarea>
<p>Comment:{comment}</p>


<select value={payment} onChange={handlePaymentChange}>
<option value="">Select an optuion</option>
<option value="visa">visa</option>
<option value="card">card</option>
<option value="paypal">paypal</option>
</select>
<p>Payment: {payment}</p>


<label htmlFor=""><input type="radio" value="pick up"
checked={shipping=== "Pick up"} onChange={handleShippingChange} />pickup</label> <br />


<label htmlFor=""> <input type="radio" value="delivery"
checked={shipping=== "delivery"} onChange={handleShippingChange} />delivery</label>
<p>Shipping :{shipping}</p>
</div>
  </>
)
}
export default MyComponent;