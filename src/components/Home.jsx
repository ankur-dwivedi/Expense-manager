import React from 'react';
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <div>
    
  
  <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
    <div className="col-md-6 p-lg-5 mx-auto my-5">
      <h1 className="display-4 font-weight-normal">Expense Manager</h1>
      <p className="lead font-weight-normal">Its a web app where user can add his expences, on basis of category and view it. Expense Manager is a SAP coded in React.js</p>
      <NavLink className="btn btn-outline-secondary" to="/login" style={{marginRight:"2rem"}}>Login</NavLink>
      <NavLink className="btn btn-outline-secondary" to="/signup" >Sign up</NavLink>
    </div>
    <div className="product-device shadow-sm d-none d-md-block"></div>
    <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
  </div>
  
  <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
    <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
      <div className="my-3 py-3">
        <h2 className="display-5">Add Expence</h2>
        <p className="lead">User can add an expense.</p>
      </div>
      <div className="bg-light shadow-sm mx-auto" style={{width: "80%", height:" 300px", borderRadius: "21px 21px 0 0"}}></div>
    </div>
    <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div className="my-3 p-3">
        <h2 className="display-5">Create Category</h2>
        <p className="lead">User can create a new category for expense.</p>
      </div>
      <div className="bg-dark shadow-sm mx-auto" style={{width: "80%", height:" 300px", borderRadius: "21px 21px 0 0"}}></div>
    </div>
  </div>
  
 
  
  
  
  <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
    <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div className="my-3 p-3">
        <h2 className="display-5">All Expence</h2>
        <p className="lead">User should be able to see all expenses added by him/her.</p>
      </div>
      <div className="bg-white shadow-sm mx-auto" style={{width: "80%", height:" 300px", borderRadius: "21px 21px 0 0"}}></div>
    </div>
    <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div className="my-3 py-3">
        <h2 className="display-5">All Category</h2>
        <p className="lead">User should be able to see all categories created by him/her.</p>
      </div>
      <div className="bg-white shadow-sm mx-auto" style={{width: "80%", height:" 300px", borderRadius: "21px 21px 0 0"}}></div>
    </div>
  </div>
  
  <footer className="container py-5">
    <div className="row">
     
    </div>
  </footer>
  </div>
  );
}

export default Home;
