import React,{useState} from 'react';
import { useHistory } from "react-router-dom";
const axios = require('axios').default;


function AddExpense() {

  const [signup, setSignup] = useState({
    category: "",
    amount: "",
    description: ""
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
  function Add(){
     axios.post(" https://expense-manager-shipmnts.herokuapp.com/api/v1/user/add_expense",{
        "category": signup.category,
        "amount": parseInt(signup.amount),
        "description": signup.description
      }, {
        headers: {
          'Authorization': localStorage.getItem("token") 
        }}
     )
     .then(function (response) {
       setSignup({category:"",amount:"",description:""})
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

<div className=" col-lg-3 text-center ">
    <form className="form-signin">
  <img className="mb-4" src="logo.png" alt="" width="30%" height="30%"/>
  <h1 className="h3 mb-3 " style={{fontWeight:"normal"}}>Add Expense</h1>
  <label for="inputCat" className="sr-only">Category</label>
  <input type="text" id="inputCat" name="category" onChange={handleChange} value={signup.category} className="form-control" placeholder="Category" required autofocus/>
  <label for="inputAmt" className="sr-only">Amount</label>
  <input type="number" id="inputAmt" name="amount" onChange={handleChange} value={signup.amount} className="form-control" placeholder="Amount" required/>
  <label for="inputDes" className="sr-only">Description</label>
  <input type="text" id="inputDes" name="description" onChange={handleChange} value={signup.description} className="form-control" placeholder="Description" required/>
  
  <button className="btn btn-lg btn-dark btn-block" type="button" style={{marginTop:"3rem"}} onClick={Add}>Add</button>
  <p className="mt-5 mb-3 text-muted">&copy; Ankur Dwivedi</p>
</form>
</div>
    </div>
    
  );
}

export default AddExpense;
