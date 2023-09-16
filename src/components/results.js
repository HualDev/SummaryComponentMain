import React from "react";

import '../stylesheets/results.css'


function Results({background, color, image, item, first, second} ){
    return(
      <div className={`${background} container-result`}>
        <div className="left">
          <img src={image} alt="reaction Icon"/>
          <p className={`${color} item`}>{item}</p>
        </div>
        <div className="right">
          <span className="first">{first}</span>
          <span className="second"> / {second}</span> 
        </div>
      </div>
    )
}

export default Results