import React, { useState, useEffect, useRef } from "react";

function Mycomponent7() {
  

    const imputRef = useRef(null);

    useEffect(() => {
      console.log("COMPONENT RENDERED");
    });



    function handleclick() {
       imputRef.current.focus();
    }



    return (
      <div>
          <button onClick={handleclick}>
               Click me!
          </button>
          <imput ref={imputRef}/>
        </div>
    )

};




export default Mycomponent7;
