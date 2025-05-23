import { useState } from "react";
// LEARNING HOW TO USE/IMPLIMENT 'ONCHANGE'

function Mycomponent1() {
    // CREATING AN INPUT(TEXTBOX FOR NAME AND QUANTITY)
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(""); 

   // CREATING A TEXTAREA(FOR COMMENT)
   const [comment, setComment] = useState("");

    // CREATING A SELECT(DROPDOWN PAYMENT MENU)
    const [payment, setPayment] = useState("");

    // CREATING A RADIO(FOR SHIPPING)
    const [shipping, setShipping] = useState("standard");
  
  
  
  
    // creating a function to handle the input/textarea/select changes
    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }

    function handleCommentChange(event) {
        setComment(event.target.value);
    }
    function handlePaymentChange(event) {
        setPayment(event.target.value);
    }

    function handleShippingChange(event) {
        setShipping(event.target.value);
    }



    return (
        <div>
            {/* THIS IS THE RETURN FUNCTION FOR INPUT */}
            <input className="name" type="text" value={name} onChange={handleNameChange} placeholder="Enter your name" />
            <p>Name: {name}</p>
            <input className="number" type="number" value={quantity} onChange={handleQuantityChange} min="0" placeholder="Enter quantity"/>
            <p>Quantity: {quantity}</p>

            {/* THIS IS THE RETURN FUNCTION FOR TEXTAREA */}
            <textarea className="comment" value={comment} onChange={handleCommentChange} placeholder="Enter delivery instructions" />
            <p>Comment: {comment}</p>

{/* THIS IS THE RETURN FUNCTION FOR SELECT */}
<select className="payment" value={payment} onChange={handlePaymentChange}>
            <option value="">Select payment method</option>
            <option value="credit card">Credit Card</option>
            <option value="debit card">Debit Card</option>
            <option value="gift card">Gift Card</option>
            <option value="paypal">PayPal</option>
            <option value="bank">Bank Transfer</option>
</select>
<p>Payment:{payment}</p>
{/* THIS IS THE RETURN FUNCTION FOR RADIO */}
<label className="radio">
            <input type="radio" value="standard"
                checked={shipping === "standard"}
                onChange={handleShippingChange}
            />
            Standard Shipping
            <br/><input type="radio" value="express"
                checked={shipping === "express"}
                onChange={handleShippingChange}
            />
            Express Shipping
            <br/><input type="radio" value="overnight"
                checked={shipping === "overnight"}
                onChange={handleShippingChange}
            />
            Overnight Shipping
            </label>
        <p>Shipping: {shipping}</p>
        <label>
</label>

        </div>
    );
}

export default Mycomponent1;