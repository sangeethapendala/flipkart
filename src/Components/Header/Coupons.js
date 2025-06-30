import React from 'react'
import Header from './Header'
import coupon from '../../Assets/img/coupons.png'

const Coupons = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <div>
          <img src={coupon} />
          <h2>Something's not Right!!</h2>
          <p className='fs-5 fw-normal'>Please Try Again</p>
        </div>
      </div>
    </>
  )
}

export default Coupons
