import React from 'react'
import avatar from '../assets/avataaars.svg'
import './Home.css'

export default function Home() {
  return (
    <div id='home'>
        <div className="container d-flex justify-content-center align-items-center vh-100 flex-column">
            <div className="photo ">
                <img src={avatar} alt='' className='w-100'/>
            </div>
            <h2>start Framework</h2>
            <div className="shape d-flex align-items-center">
                <div className='line'></div>
                <span>
                    <i class="fa-solid fa-star text-light"></i>
                </span>
                <div className="line"></div>
            </div>
            <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
    </div>
  )
}
