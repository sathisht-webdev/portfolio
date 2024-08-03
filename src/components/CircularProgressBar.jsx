import React from "react";
import './Skills.css'


const CircularProgressBar =()=>{
    const radius = 85;
    const dashArray = radius * Math.PI *2;
    const dashOffset = dashArray - (dashArray * Percentage) / 100;
    return(
        <div>
            <svg width={circleWidth} height={circleWidth} viewBox={`0 0 ${circleWidth} ${circleWidth}`}>
                <circle cx={circleWidth / 2} cy={circleWidth / 2} stroke="15px" r={radius} className="circle-background"/>
                <circle cx={circleWidth / 2} cy={circleWidth / 2} stroke="15px" r={radius} className="circle-progress"
                style={{strokeDasharray:dashArray}}/>



                
            </svg>
        </div>
    )
}




export default CircularProgressBar