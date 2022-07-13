import React from "react";
import NavBar from "./NavBar.js";
import {
  Routes, 
  Route,
} from "react-router-dom";
import Timer from "./Timer.js";
import Countdown from "./Countdown.js"

class App extends React.Component{
  render() {
    return(
      <div>
       <NavBar/>
       <h1>Main Component</h1>
       <Routes>
        <Route path = "/" element = {<Timer/>}></Route>
        <Route path = "/countdown" element = {<Countdown/>}></Route>
       </Routes>
      </div>
    );
  }
}

export default App;
