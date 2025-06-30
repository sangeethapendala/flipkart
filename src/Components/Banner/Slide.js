import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
// import ExampleCarouselImage from 'components/ExampleCarouselImage'
import banner1 from '../../Assets/img/banner1.webp'
import banner2 from '../../Assets/img/banner2.webp'
import banner3 from '../../Assets/img/banner3.webp'
import banner4 from '../../Assets/img/banner4.webp'
import banner5 from '../../Assets/img/banner5.webp'
import bank from '../../Assets/img/bank.webp'
import col1 from '../../Assets/img/col-1.webp'
import col2 from '../../Assets/img/col-2.webp'
import col3 from '../../Assets/img/col-3.webp'

const Slide = () => {
  return (
    <div className='container'>
      <Carousel>
        <Carousel.Item>
          <div>
            <img className='d-block w-100' src={banner1} alt='First slide' />
            <h1>
              <span></span>
            </h1>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={banner2} alt='First slide' />
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={banner5} alt='First slide' />
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={banner4} alt='First slide' />
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={banner3} alt='First slide' />
        </Carousel.Item>
      </Carousel>
      <div className='my-3'>
        <img className='d-block w-75 m-auto' src={bank} alt='First slide' />
      </div>
    </div>
  )
}

export default Slide
