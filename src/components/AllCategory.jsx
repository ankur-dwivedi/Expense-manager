import React,{useState} from 'react';
import { useHistory } from "react-router-dom";
const axios = require('axios').default;


function AllCategory(props) {

  
  let history = useHistory();
  const[data,setData]=React.useState([]);
  React.useEffect(()=>{
    axios.get(" https://expense-manager-shipmnts.herokuapp.com/api/v1/user/categories",{
      headers: {
        'Authorization': localStorage.getItem("token") 
      }}
   )
   .then(function (response) {
     let a=[]
     for(let x=0;x<response.data.categories.length;x++){
      a.push(
         <p style={{marginLeft:"0.5rem",fontSize:"1.2rem",fontWeight:"500",color:"red"}}>{response.data.categories[x]}</p>
       )
     }
     setData(a)
   console.log(response)
   })
   .catch(function (error) {
     console.log(error);
   })
   .finally(function () {
     // always executed
    
   });
  },[props]);
  
      
    


  return (
    <div className="row justify-content-md-center " style={{margin:"0",marginTop:"8rem"}}>

<div className=" col-lg-3 text-center ">
    <form className="form-signin">
  <img className="mb-4" src="logo.png" alt="" width="30%" height="30%"/>
  <h1 className="h3 mb-3 " style={{fontWeight:"normal"}}>All Category</h1>
  
</form>
{data}

</div>

    </div>
    
  );
}

export default AllCategory;
