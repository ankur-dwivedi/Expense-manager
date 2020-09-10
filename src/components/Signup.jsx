import React,{useState} from 'react';
import { useHistory } from "react-router-dom";

const axios = require('axios').default;

function Signup() {

  const [signup, setSignup] = useState({
    uname: "",
    email: "",
    password: ""
  });

  function handleChange(event) {
    const { name, value } = event.target; 
    setSignup(prevSignup => {
      return {
        ...prevSignup,
        [name]: value
      };
    });
  }
  let history = useHistory();
  function register(){
     axios.post(" https://expense-manager-shipmnts.herokuapp.com/api/v1/register",{
      "user_name": signup.uname,
	    "email": signup.email,
	    "password": signup.password
     })
     .then(function (response) {
       history.push("/")
     console.log(response)
     })
     .catch(function (error) {
       console.log(error);
     })
     .finally(function () {
       // always executed
      
     });  
     }


  return (
    <div className="row justify-content-md-center " style={{margin:"0",marginTop:"8rem"}}>

<div className="col-lg-3 text-center ">
    <form className="form-signin">
  <img className="mb-4" src="logo.png" alt="" width="30%" height="30%"/>
  <h1 className="h3 mb-3 " style={{fontWeight:"normal"}}>Please sign up</h1>
  <label for="inputUsername" className="sr-only">Username</label>
  <input type="text" name="uname" onChange={handleChange} value={signup.uname} id="username" className="form-control" placeholder="Username" required autofocus/>
  <label for="inputEmail" className="sr-only">Email address</label>
  <input type="email" id="inputEmail" name="email" onChange={handleChange} value={signup.email} className="form-control" placeholder="Email address" required autofocus/>
  <label for="inputPassword" className="sr-only">Password</label>
  <input type="password" id="inputPassword" name="password" onChange={handleChange} value={signup.password} className="form-control" placeholder="Password" required/>
  
  <button className="btn btn-lg btn-dark btn-block" type="button" style={{marginTop:"3rem"}} onClick={register}>Sign up</button>
  <p className="mt-5 mb-3 text-muted">&copy; Ankur Dwivedi</p>
</form>
</div>
    </div>
    
  );
}

export default Signup;
