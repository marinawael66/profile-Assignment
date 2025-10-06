import React from 'react'
import './Model.css'

export default function Model({image , onClose}) {
  if(!image) return null;
  return (
    <div className=" layer start-0  top-0  vh-100 vw-100  img-fluid position-fixed d-flex justify-content-center align-items-center " onClick={onClose}>
       <div className="overlay position-absolute start-0 top-0 w-100 h-100"></div>

      <div className="position-relative z-10 " 
      onClick={(e)=>e.stopPropagation()}>
        <img src={image} />
      </div>
    </div>
  )
}
