import React from 'react'
import "./button.css"

export default function Button(props) {
  return (
    <>
    <button className="explore-button" onClick={props.work}>
      <span>{props.title}</span>
    </button>
    </>
  )
}
