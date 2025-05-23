import React, { useState } from 'react';

// THIS IS HOW YOU CAN UPDATE THE STATE OF ARRAYS USING REACT

function MyComponent3() {
    


const [foods, setFoods] = useState(['Pizza','Burger','Pasta' ,])

    function handleAddFood() {
      
        const newFood = document.getElementById('foodinput').value;
        setFoods(f => [...f, newFood]);
        // Clear the input field after adding the food
            document.getElementById('foodinput').value = '';
        
    }
    function handleRemoveFood(index) {
        setFoods(f => f.filter((_, i) => i !== index)); 
    
    }   

    return (
        <div className='food-container'>
            <h2>LIST OF FOOD</h2>
            <ul className='food-list'>
                {foods.map((food, index) =>
                 <li key={index} onClick={() => handleRemoveFood(index)}>
                    {food}
                     </li>
                )}
            </ul>
            <input type="text" id="foodinput" placeholder='Enter Food Name' />
            <button className='food-button' onClick={handleAddFood}>Add Food</button>
        </div>
    );
}



export default MyComponent3;