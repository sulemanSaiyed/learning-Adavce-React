
import List from "./List";
function App() {
  const fruit=    [{id:6,name:"botatao",cal:66},
    {id:7,name:"tomato",cal:95},
    {id:8,name:"pyaz", cal:15} ];

    const vegetable=
    [{id:6,name:"botatao",cal:45},
      {id:7,name:"tomato",cal:95},
      {id:8,name:"pyaz", cal:15} ];
  return(
  <>
  {fruit.length>0?<List items={fruit} cat="Fruits"/>:null}
  {vegetable.length>0?<List items={vegetable} cat="vegetables"/>:null}
  
  </>


  );
}

export default App
