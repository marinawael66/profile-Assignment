import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <section id='footer' >
      <div className="container pb-5  ">
        <div className="row">
          <div className='col-md-4 text-center'>
            <h3>LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className="col-md-4 text-center">
            <h3>AROUND THE WEB</h3>
            <div className='d-flex justify-content-center icons '>
              <div className='icon '>
                <i class="fa-brands fa-facebook"></i>
              </div>
              <div className="icon">
                <i class="fa-brands fa-twitter"></i>
              </div>
              <div className="icon">
                <i class="fa-brands fa-linkedin-in"></i>
              </div>
              <div className="icon">
                <i class="fa-solid fa-globe"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <h3>ABOUT FREELANCER</h3>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
        </div>
       

       
      </div>
       <div className="copyright">
          <h5 className=' text-center '>Copyright © Your Website 2021</h5>
        </div>
    </section>
  )
}
