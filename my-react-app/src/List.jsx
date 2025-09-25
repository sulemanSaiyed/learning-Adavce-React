import PropTypes from "prop-types";
function List(props){



const itemList=props.items;

const listItems= itemList.map( itemLists=> <li key={ itemLists.id}>
  { itemLists.name}:&nbsp;<b>{ itemLists.cal}</b></li>)

  return(<><h3 >{props.cat}</h3>
          <ol >{listItems}</ol></>);



}

List.protoTypes={
  cat:PropTypes.string,
  items:PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number, name:PropTypes.string, cal:PropTypes.number}))
}
List.defaultProps={
  cat:"Category",
  items:[],
}
export default List