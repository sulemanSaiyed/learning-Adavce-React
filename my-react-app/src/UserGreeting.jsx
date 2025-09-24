

function UserGreetinng(props){
if(props.isLoggedIn){
  return <h2>Welcome {props.userName}</h2>
}

  return <h2>Plz login to cont</h2>


}
export default UserGreetinng;