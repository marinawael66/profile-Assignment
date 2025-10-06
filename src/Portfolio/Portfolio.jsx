import React, { useState } from 'react'
import './Portfolio.css'
import img1 from '../assets/kokh.png'
import img2 from '../assets/cake.png'
import img3 from '../assets/house.png'
import Model from '../Model/Model'

export default function Portfolio() {

  const [selectedImage, setSelectedImage] = useState(null);

  const images = [img1, img2, img3, img1, img2, img3];
  return (
    <section id='portfolio' className='container mb-4'>

      <h2 className='text-center'>portfolio component</h2>
      <div className="container d-flex justify-content-center">

        <div className="shape d-flex align-items-center">
          <div className='line'></div>
          <span>
            <i className="fa-solid fa-star"></i>
          </span>
          <div className="line"></div>
        </div>
      </div>
      <div className="photos mt-5">


        <div className="row g-5">

          {
            images.map((img, index) => {

              return <div className="col-md-6 col-lg-4">
                <div key={index} className='position-relative overflow-hidden rounded'
                  onClick={() => setSelectedImage(img)} >
                  <img src={img} className='w-100 ' />
                  <div className="hoverlayer position-absolute top-0 start-0 w-100 h-100">
                    <span>
                      <i class="fa-solid fa-plus"></i>
                    </span>
                  </div>

                </div>
              </div>

            })
          }

        </div>
      </div>
      
      
        <Model
          image={selectedImage}
          onClose={() => setSelectedImage(null)} />

      
      


    </section>
  )
}
