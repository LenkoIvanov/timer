import React from "react";

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            totalSeconds: 0
        }
    }

    formatSeconds = function (totalSeconds) {
        var seconds = totalSeconds % 60; //remainder of seconds; refactor for hours
        var minutes =   Math.floor(totalSeconds / 60); //same stuff as above
        
        if(seconds < 10){
            seconds = "0" + seconds;
        }
        if(minutes < 10){
            minutes = "0" + minutes;  
        }

        return minutes + ":" + seconds;
    }

    render(){
        var sec = this.props.totalSeconds;
        return(
            <div>
                <h2>{this.formatSeconds(sec)}</h2>
            </div>
        );
    }
}

export default Clock;