import React from 'react';


function Login() {
  return (
    <div className="row justify-content-md-center " style={{margin:"0",marginTop:"8rem"}}>

<div className=" col-lg-3 text-center ">
    <form className="form-signin">
  <img className="mb-4" src="logo.png" alt="" width="30%" height="30%"/>
  <h1 className="h3 mb-3 " style={{fontWeight:"normal"}}>Please sign in</h1>
  <label for="inputEmail" className="sr-only">Email address</label>
  <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus/>
  <label for="inputPassword" className="sr-only">Password</label>
  <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
  
  <button className="btn btn-lg btn-dark btn-block" type="submit" style={{marginTop:"3rem"}}>Sign in</button>
  <p className="mt-5 mb-3 text-muted">&copy; Ankur Dwivedi</p>
</form>
</div>
    </div>
    
  );
}

export default Login;
