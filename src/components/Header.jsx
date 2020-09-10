import React from 'react';
import { NavLink, useHistory} from "react-router-dom";


function Header(props) {
    let history = useHistory();
    const [visible,setVisible]=React.useState("hidden")
    React.useEffect(()=>{
        setVisible(localStorage.getItem("token")?"visible":"hidden")
    },[props])

  return (
    
    <nav className="site-header sticky-top py-1">
    <div className="container d-flex flex-column flex-md-row justify-content-between">
      <NavLink className="py-2" to="/" aria-label="Product" style={{color:"white",fontSize: "large",fontWeight: "500"}}>
      Expense Manager
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="d-block mx-auto" role="img" viewBox="0 0 24 24" focusable="false"><title>Product</title><circle cx="12" cy="12" r="10"/><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"/></svg> */}
      </NavLink>
      <NavLink className="py-2 d-none d-md-inline-block" to="/add_expense">Add Expence</NavLink>
      <NavLink className="py-2 d-none d-md-inline-block" to="/add_category">Create Category</NavLink>
      <NavLink className="py-2 d-none d-md-inline-block" to="/all_expense">All Expence</NavLink>
      <NavLink className="py-2 d-none d-md-inline-block" to="/all_category">All Category</NavLink>
      <NavLink className="py-2 d-none d-md-inline-block" to="" style={{visibility:visible}} onClick={()=>{localStorage.clear();history.push("/")}}>Logout</NavLink>
    </div>
  </nav>
  
  
  );
}

export default Header;
