import React, { useState } from "react";

// USING UPDATE FUNCTION TO UPDATE THE STATE OF AN OBJECT IN REACT



// THIS IS HOW YOU CAN USE THE STATE HOOK TO UPDATE THE STATE OF AN OBJECT
// THE STATE HOOK IS A FUNCTION THAT RETURNS AN ARRAY WITH TWO ELEMENTS
// THE FIRST ELEMENT IS THE CURRENT STATE AND THE SECOND ELEMENT IS A FUNCTION THAT UPDATES THE STATE
// THE FUNCTION THAT UPDATES THE STATE CAN TAKE A FUNCTION AS AN ARGUMENT

function MyComponent2() {
    const [car, setCar] = useState({
        year: 2025,
        model: "cybertruck",
        make: "tesla",
    });

// THESE ARE THE FUNCTIONS THAT UPDATE THE STATE OF THE COMPONENT
    function handleYearChange(e) {
        setCar(C => ({...C, year: e.target.value}));
    }

    function handleMakeChange(e) {
        setCar(C => ({...C, make: e.target.value}));
    }

    function handleModelChange(e) {
        setCar(C => ({...C, model: e.target.value}));
    }

    return (
        <div className="car-container">
           <p>YOUR FAVOURITE CAR IS <br/>{car.year} {car.make} {car.model} </p>

           <input
             className="car-input"
             type="number"
             value={car.year}
             onChange={handleYearChange}
             placeholder="Year"
           /><br />
           <input
             className="car-input"
             type="text"
             value={car.make}
             onChange={handleMakeChange}
             placeholder="Make"
           /><br /> 
              <input
             className="car-input"
             type="text"
             value={car.model}
             onChange={handleModelChange}
             placeholder="Model"
           /><br />
        </div>
    );
}

export default MyComponent2;