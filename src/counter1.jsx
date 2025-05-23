import { useState } from "react";
// KNOWING ABOUT UPDATER FUNCTION
function Counter1() {


const [count, setcount] = useState(0)


const increment = ()=> {
    // FROM THIS(count + 1)
    // CHANGED IT TO THIS
    setcount(c => c + 1)
}
const decrement = ()=> {
    // FROM THIS(count - 1)
    // CHANGED IT TO THIS
    setcount(c => c - 1)
}
const reset = ()=> {
    // FROM THIS(0)
    // CHANGED IT TO THIS
    setcount(c => c = 0)
}

return(
    <div className="counter-container">
<p className="count-display">{count}</p>
<button className="counter-button" onClick={increment}>Increment </button>
<button className="counter-button" onClick={reset}>Reset </button>

<button className="counter-button" onClick={decrement}>Decrement </button>
    </div>
)


}

export default Counter1;
