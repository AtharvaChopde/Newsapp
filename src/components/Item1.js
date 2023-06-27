import React from "react";
import "./Item1.css";
export default function Item1(props) {

    const urlll = props.url

    


  return (
    <div className="article">
      <div className="picture backimg" style={{backgroundImage : `url(${urlll})`}} >

     
        
      </div>
      <div className="info">
        <h4>{props.title}</h4>
        <h6>
         {
          props.desc
         }
        </h6>
      </div>
    </div>
  );
}
