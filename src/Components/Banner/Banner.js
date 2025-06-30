import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Slide from './Slide'
import ProductTitle from './ProductTitle'

const Banner = () => {
  return (
    <div className='mt-3'>
      <ProductTitle />
      <Slide />
    </div>
  )
}

export default Banner
