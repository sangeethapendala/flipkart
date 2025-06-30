import React from 'react'
// import './productSection.css'
import ProductTitleData from './ProductTitleData'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ProductTitleData2 from './productTitleData2'

const ProductTitle = () => {
  const { windowWidth } = useSelector((store) => store.userStore)
  return (
    <section className='mb-4 bg-light'>
      <div
        className='container'
        style={{ border: '1px solid lightgray', padding: '5px 0' }}
      >
        {windowWidth > 768 ? (
          <div className='d-flex justify-content-evenly'>
            {ProductTitleData.map((cv, index) => {
              return (
                <div key={index}>
                  <Link
                    to={'/productPage/' + cv.category}
                    className='text-decoration-none'
                  >
                    <div>
                      <img src={cv.img} />
                    </div>
                    <span>{cv.name}</span>
                  </Link>
                </div>
              )
            })}
          </div>
        ) : (
          <div className='row'>
            {ProductTitleData2.map((cv, index) => {
              return (
                <div key={index} className='col-3'>
                  <Link
                    to={'/productPage/' + cv.category}
                    className='text-decoration-none'
                  >
                    <div>
                      <img src={cv.img} />
                    </div>
                    <span>{cv.name}</span>
                  </Link>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}

export default ProductTitle
