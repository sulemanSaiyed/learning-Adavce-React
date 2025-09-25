function List(){

  const fruit=
  [{id:1,name:"apple",cal:45},
    {id:2,name:"loda",cal:95},
    {id:3,name:"pandu", cal:15} ];

   // fruit.sort((a,b)=>a.name.localeCompare(b.name));// alphabtical
  // fruit.sort((a,b)=>b.name.localeCompare(a.name));  reverse
  // fruit.sort((a,b)=>a.cal-b.cal);

const  lawCalfruit=fruit.filter(fruits=> fruits.cal<20)

const listItems= lawCalfruit.map( lawCalfruits=> <li key={ lawCalfruits.id}>
  { lawCalfruits.name}:&nbsp;<b>{ lawCalfruits.cal}</b></li>)

  return(<ol>{listItems}</ol>);



}

export default List