function List(){

  const fruit=
  [{name:"apple",cal:45},
    {name:"loda",cal:45},
    {name:"pandu", cal:45} ];
const listItems=fruit.map(fruit=> <li key={fruit.name}>{fruit.name}</li>)

  return(<ul>{listItems}</ul>);



}

export default List