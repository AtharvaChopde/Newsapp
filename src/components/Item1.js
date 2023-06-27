import React from "react";
import "./Item1.css";
export default function Item1(props) {

    const urlll = props.url

    


  return (
    <div className="article">
      <div className="picture backimg" style={{backgroundImage : `url(${urlll})`}} >

     
        
      </div>
      <div className="info">
        <h6>title</h6>
        <h6>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
          repudiandae eos odio! Esse, adipisci nulla et necessitatibus
          voluptatem ea dolorem!
        </h6>
      </div>
    </div>
  );
}
