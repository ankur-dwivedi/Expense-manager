import React from 'react';
import { NavLink,useHistory } from 'react-router-dom';

function Home(props) {

  const [visible,setVisible]=React.useState("hidden")
  React.useEffect(()=>{
      setVisible(localStorage.getItem("token")?"none":"")
  },[props])
  let history = useHistory();


  return (
    <div>
    
  
  <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
    <div className="col-md-6 p-lg-5 mx-auto my-5">
      <h1 className="display-4 font-weight-normal">Expense Manager</h1>
      <p className="lead font-weight-normal">Its a web app where user can add his expences, on basis of category and view it. Expense Manager is a SAP coded in React.js</p>
      <NavLink className="btn btn-outline-secondary" to="/login" style={{marginRight:"2rem",display:localStorage.getItem("token")?"none":""}} >Login</NavLink>
      <NavLink className="btn btn-outline-secondary" to="/signup" style={{display:visible}} >Sign up</NavLink>
    </div>
    <div className="product-device shadow-sm d-none d-md-block"></div>
    <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
  </div>
  
  <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
    <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
      <div className="my-3 py-3">
        <h2 className="display-5">Add Expence</h2>
        <p className="lead">Click below to add an expense.</p>
      </div>
      <div className="bg-light shadow-sm mx-auto" style={{width: "80%", height:" 300px", borderRadius: "21px 21px 0 0"}}>
      <button type="button" class="btn btn-dark" style={{padding:" 2rem",marginTop:" 6rem",borderRadius: "44px"}} onClick={()=>history.push("/add_expense")}>Add Expence</button>
      </div>

    </div>
    <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div className="my-3 p-3">
        <h2 className="display-5">Create Category</h2>
        <p className="lead">Click below to create a new category for expense.</p>
      </div>
      <div className="bg-dark shadow-sm mx-auto" style={{width: "80%", height:" 300px", borderRadius: "21px 21px 0 0"}}>
      <button type="button" class="btn btn-light" style={{padding:" 2rem",marginTop:" 6rem",borderRadius: "44px"}}  onClick={()=>history.push("/add_category")}>Create Category</button>

      </div>
    </div>
  </div>
  
 
  
  
  
  <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
    <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div className="my-3 p-3">
        <h2 className="display-5">All Expence</h2>
        <p className="lead">Click below to see all expenses added.</p>
      </div>
      <div className="bg-white shadow-sm mx-auto" style={{width: "80%", height:" 300px", borderRadius: "21px 21px 0 0"}}>
      <button type="button" class="btn btn-dark" style={{padding:" 2rem",marginTop:" 6rem",borderRadius: "44px"}} onClick={()=>history.push("/all_expense")}>All Expence</button>

      </div>
    </div>
    <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div className="my-3 py-3">
        <h2 className="display-5">All Category</h2>
        <p className="lead">Click below to see all categories created.</p>
      </div>
      <div className="bg-white shadow-sm mx-auto" style={{width: "80%", height:" 300px", borderRadius: "21px 21px 0 0"}}>
      <button type="button" class="btn btn-dark" style={{padding:" 2rem",marginTop:" 6rem",borderRadius: "44px"}}  onClick={()=>history.push("/all_category")}>All Category</button>

      </div>
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
