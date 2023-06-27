import React from 'react'
import "./Newsitem.css"
import "./main.css"
export default function NewsItem(props) {
  return (
    <div>

<div class="card">
  
  <div className="photo">
  <img src={props.photo} alt="Avatar" />
  </div>
  <div class="container">
    <h4><b>{props.title.slice(0,5)}</b></h4>
    <p>{props.desc.slice(0,70)}</p>
  </div>

</div>



    


    </div>
  )
}
