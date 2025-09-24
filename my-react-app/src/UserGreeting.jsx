import PropTypes from 'prop-types';

function UserGreetinng(props){
const isLogin=<h2 className="welcome-messsage">Welcome 
                 {props.userName}</h2>

  const notLog=   <h2 className="plz-login">plz login</h2>            
  return (props.isLoggedIn?isLogin:notLog);
                 

}
UserGreetinng.propTypes={
  isLoggedIn:PropTypes.bool,
   userName:PropTypes.string,

}
UserGreetinng.defaultProps={
  isLoggedIn:false,
   userName:"Nones",

}
export default UserGreetinng