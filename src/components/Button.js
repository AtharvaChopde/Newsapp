import React from 'react'
import "./button.css"

export default function Button(props) {
  return (
    <>
    <button className="explore-button">
      <span>{props.title}</span>
    </button>
    </>
  )
}
