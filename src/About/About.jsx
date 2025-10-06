import React from 'react'
import './About.css'

export default function About() {
  return (

    <div id="about">
      <div className="container d-flex vh-100 justify-content-center align-items-center flex-column ">
        <h2 className="text-uppercase  text-white  ">about component</h2>
        <div className="shape d-flex mt-2">
          <div className="line"></div>
          <span>
            <i class="fa-solid fa-star text-light"></i>
          </span>
          <div className="line"></div>

        </div>
        <div className="caption d-flex justify-content-around">
          <p className="me-1">
            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
          </p>
          <p>
            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
          </p>
        </div>

      </div>
    </div>

  )
}
