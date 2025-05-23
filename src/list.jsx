



// function List() {

//   const fruits = [{id: 1, name: "Apple", calories: 95 },
//     {id: 2, name: "Banana", calories: 105 },
//     {id: 3, name: "Cherry", calories: 50 },
//     {id: 4, name: "Date", calories: 66 },
//     {id: 5, name: "Elderberry", calories: 52 }];



//     fruits.sort((a, b) => a.name.localeCompare(b.name));
//   fruits.sort((a, b) => a.calories - b.calories);


// const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
// const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);


// //   const listItems = highCalFruits.map(highCalFruits => <li key={highCalFruits.id}>
// //     {highCalFruits.name}: &nbsp;
// //      <b>{highCalFruits.calories}</b></li>)

// //   const listItems = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>
// //     {lowCalFruit.name}: &nbsp;
// //      <b>{lowCalFruit.calories}</b></li>);

//   const listItems = fruits.map(fruit => (
//     <li key={fruit.id}>{fruit.name}: &nbsp;
//       <b>{fruit.calories}</b></li>));

//   return (
//     <ol>{listItems}</ol>
//   );
// }


function List(props){
    const cartegory = props.cartegory;
    const itemList = props.item;




    const listitems = itemList.map(item => <li key={item.id}>
                                           {item.name}: &nbsp;
                                           <b>{item.calories}</b></li>);

    return (
        <>
    <h3 className="list-cartegory" >{cartegory}</h3>
    <ol className="list-items" >{listitems}</ol>
    </>);
}
 
List.defaultProps = {
    cartegory: "category",
}


export default List;