import React from 'react'
import { NavLink } from 'react-router-dom'
import empty from '../../Assets/img/empty.webp'

const EmptyCart = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light gap-6 p-4'>
      <div className='w-25'>
        <img src={empty} className='w-100' alt='empty-logo' />
      </div>
      <h2>Sorry,Your Cart is Empty!</h2>
      <NavLink to={'/'}>
        <button className=' px-3 py-2 border border-light rounded  fw-bold  text-light bg-primary'>
          Shop Now
        </button>
      </NavLink>
    </div>
  )
}

export default EmptyCart
