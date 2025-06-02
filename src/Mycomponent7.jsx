import React, { useState, useEffect, useRef } from "react";

function Mycomponent7() {
  

    const imputRef = useRef(null);

    useEffect(() => {
      console.log("COMPONENT RENDERED");
    });



    function handleClick() {
       imputRef.current.focus();
    }



    return (
      <div>
          <button onClick={handleClick}>
               Click Me!
          </button>
          <imput ref={imputRef}/>
        </div>
    )

};




export default Mycomponent7;
