import React, { useState, useEffect, useRef } from "react";

function Mycomponent7() {
  let [number, setnumber] = useState(0);





  useEffect(() => {
    console.log("COMPONENT RENDERED");
  });





  function handleclick() {
    setNumber((n) => n + 1);
  }




  return <button onClick={handleclick}>Click me!</button>;
}




export default Mycomponent7;
