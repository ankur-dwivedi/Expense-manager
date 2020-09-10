import React from 'react';
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import Home from "./Home.jsx";
import Header from "./Header.jsx";


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
        <Header/>
          <Switch>
          
          <Route exact path="/"><Home/></Route>
          <Route exact path="/login"><Login/></Route>
          <Route exact path="/signup"><Signup/></Route>
          
          </Switch>
        </main>
      </div>
      
    </Router>
   
  );
}

export default App;
