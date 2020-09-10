import React from 'react';
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import Home from "./Home.jsx";
import Header from "./Header.jsx";
import AddExpense from "./AddExpense.jsx";
import AddCategory from "./AddCategory.jsx";
import AllCategory from "./AllCategory.jsx";
import AllExpense from "./AllExpense.jsx";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function App() {
  return (
    <Router 
    >
      <div>
        
        {/* {window.location.pathname != "/" &&<Header_wn slid={this.state.slid} from={"home"} exam_id={this.state.exam_id} topic_id={this.state.topic_id} ChangeCat={(id) => this.setState({ sid: id })} search_content={this.state.search_content} sid={this.state.sid} />} */}
        <main>
        
          <Switch>
          
          <Route exact path="/" render={props =><div><Header {...props} /><Home {...props}/></div>}></Route>
          <Route exact path="/login" render={props =><div><Header {...props} /><Login {...props}/></div>}></Route>
          <Route exact path="/signup" render={props =><div><Header {...props} /><Signup {...props}/></div>}></Route>
          <Route exact path="/add_expense" render={props =><div><Header {...props} /><AddExpense {...props}/></div>}></Route>
          <Route exact path="/add_category" render={props =><div><Header {...props} /><AddCategory {...props}/></div>}></Route>
          <Route exact path="/all_category" render={props =><div><Header {...props} /><AllCategory {...props}/></div>}></Route>
          <Route exact path="/all_expense" render={props =><div><Header {...props} /><AllExpense {...props}/></div>}></Route>

          </Switch>
        </main>
      </div>
      
    </Router>
   
  );
}

export default App;
