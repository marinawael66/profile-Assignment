import React from 'react'
import'./Contact.css'

export default function Contact() {
  return (
    <section id='contact'>
       <h2 className='text-center'>conatct section</h2>
    <div className="container d-flex justify-content-center">
      
            <div className="shape d-flex align-items-center">
                <div className='line'></div>
                <span>
                    <i class="fa-solid fa-star"></i>
                </span>
                <div className="line"></div>
            </div>

      
    </div>
    <div className="container w-50 m-auto">
      <input type='text' className='form-control mt-5 mb-4 ' placeholder='userName'/>
      <input type='text' className='form-control mt-5 mb-4 ' placeholder='userAge'/>
      <input type='email' className='form-control mt-5 mb-4 ' placeholder='userEmail'/>
      <input type='password' className='form-control mt-5 mb-4 ' placeholder='userPassword'/>
      <button type='button' className='btn'>send Message</button>
    </div>
    </section>
  )
}
