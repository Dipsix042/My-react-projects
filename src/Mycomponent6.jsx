import React,{useEffect, useState} from "react";
// THIS IS AN EXAMPLE ON HOW TO USE THE useEffect HOOK

function Mycomponent6(){

const [width, setWidth] = useState(window.innerWidth);
const [height, setHeight] = useState(window.innerHeight);

// FIRST useEffect
useEffect(() => {
window.addEventListener("resize", handleResize)
console.log("EVENT LISTENER ADDED")

return () => {
    window.removeEventListener("resize", handleResize)
    console.log("EVENT LISTENER REMOVED")

}
}, [])

// SECOND useEffect
useEffect(() => {
    document.title = `Size: ${width} x ${height}`
}, [width,height])

function handleResize(){
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
}


    return(<>
    <p>
        window Width: {width}px
    </p>
    <p>
        window Height: {height}px
    </p>
    </>)
}

export default Mycomponent6