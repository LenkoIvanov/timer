import React from "react";
import Clock from "./Clock.js";
import "./styles.css";

class Countdown extends React.Component{
    render() {
        return(
            <div className = "container">
                <div className = "clock"><Clock totalSeconds = {126}/></div>
            </div>
        );
    }
}

export default Countdown;