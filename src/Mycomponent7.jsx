import React, { useState, useEffect, useRef } from "react";

function Mycomponent7() {
  

    const imputRef1 = useRef(null);
    const imputRef2 = useRef(null);
    const imputRef3 = useRef(null);

    useEffect(() => {
      console.log("COMPONENT RENDERED");
    });



    function handleClick1() {
       imputRef1.current.focus();
       imputRef1.current.style.background = "yellow";

    }
    function handleClick2() {
       imputRef2.current.focus();
       imputRef2.current.style.background = "yellow";

    }
    function handleClick3() {
       imputRef3.current.focus();
       imputRef3.current.style.background = "yellow";

    }




    return (
      <div>
          <button onClick={handleClick1}>
               Click Me1!
          </button>
          <imput ref={imputRef1}/>
          <button onClick={handleClick2}>
               Click Me2!
          </button>
          <imput ref={imputRef2}/>
          <button onClick={handleClick3}>
               Click Me3!
          </button>
          <imput ref={imputRef3}/>
        </div>
    )

};




export default Mycomponent7;
