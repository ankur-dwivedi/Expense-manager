import React,{useState} from 'react';
import { useHistory } from "react-router-dom";
const axios = require('axios').default;


function Login() {

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
  function login(){
     axios.post(" https://expense-manager-shipmnts.herokuapp.com/api/v1/login",{
	    "email": signup.email,
	    "password": signup.password
     })
     .then(function (response) {
       history.push("/")
        localStorage.setItem("token",response.data.token)
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

<div className=" col-lg-3 text-center ">
    <form className="form-signin">
  <img className="mb-4" src="logo.png" alt="" width="30%" height="30%"/>
  <h1 className="h3 mb-3 " style={{fontWeight:"normal"}}>Please sign in</h1>
  <label for="inputEmail" className="sr-only">Email address</label>
  <input type="email" id="inputEmail" name="email" onChange={handleChange} value={signup.email} className="form-control" placeholder="Email address" required autofocus/>
  <label for="inputPassword" className="sr-only">Password</label>
  <input type="password" id="inputPassword" name="password" onChange={handleChange} value={signup.password} className="form-control" placeholder="Password" required/>
  
  <button className="btn btn-lg btn-dark btn-block" type="button" style={{marginTop:"3rem"}} onClick={login}>Sign in</button>
  <p className="mt-5 mb-3 text-muted">&copy; Ankur Dwivedi</p>
</form>
</div>
    </div>
    
  );
}

export default Login;
