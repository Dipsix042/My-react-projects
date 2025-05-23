import React,{useState} from "react"

// USING USESTATE AND ONCHANGE TO CREATE A COLOR PICKER


function Colorpicker(){


const[color, setColor] = useState("#ffffff");


// Function to handle color change
function handleColorChange(event){
    setColor(event.target.value);
}




    return(
        <div className="colorpicker-container">
<h1>Color picker</h1>
<div className="color-display" style={{backgroundColor: color}}>
<p>Selected Color: {color}</p>
</div>
<label className="color-title">Select a Color</label>
<input type="color" value={color} onChange={(handleColorChange)} />
        </div>
    )
}

export default Colorpicker