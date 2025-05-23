

function Button1() {
    


    const handleClick = (e) => e.target.textContent = "DAMMNIT! 😡";
    return (
        <button onDoubleClick={(e) => handleClick(e)}>Click Me 😁</button>
    );
}

export default Button1;