import React,{useState} from "react"
// CREATING AN ARRAY OF OBJECTS AND UPDATING THEIR STATE USING REACT
function MyComponent4() {

const [cars, setCars] = useState([])
const [carYear, setCarYear] = useState(new Date().getFullYear())
const [carMake, setCarMake] = useState("")
const [carModel, setCarModel] = useState("") 

function handleAddCar(){
const newCar = {year: carYear,
     make: carMake, 
    model: carModel};

    setCars(c =>[...c, newCar])


setCarYear(new Date().getFullYear());
setCarMake("")
setCarModel("") 

}
function handleRemoveCar(index){
setCars(c => c.filter((_, i) => i !== index))
}
function handleYearChange(event){
  setCarYear(event.target.value)
}
function handleMakeChange(event){
setCarMake(event.target.value)
}
function handleModelChange(event){
setCarModel(event.target.value)
}
return (
    <div className="mycomponent4-container">
        <h2>LIST OF CARS</h2>
        <ul>
            {cars.map((car, index) => (
                <li key={index} onClick={() => handleRemoveCar(index)}>
                    {car.year} {car.make} {car.model}
                </li>
            ))}
        </ul>

        <input type="number" value={carYear} onChange={handleYearChange} /><br />
        <input
            type="text"
            value={carMake}
            onChange={handleMakeChange}
            placeholder="ENTER CAR MAKE"
        /><br />
        <input
            type="text"
            value={carModel}
            onChange={handleModelChange}
            placeholder="ENTER CAR MODEL"
        /><br />
        <button onClick={handleAddCar}>ADD CAR</button>
    </div>
)
 }






export default MyComponent4;