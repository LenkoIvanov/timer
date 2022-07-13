import React from "react";
import {Link} from "react-router-dom";

class NavBar extends React.Component{
    render (){
        return(
            <div>
                <h1>NavBar Component</h1>
                <nav>
                    <Link to = "/">Timer</Link> |
                    <Link to = "/countdown">Countdown</Link>
                </nav>
            </div>
        );
    }
}

export default NavBar;