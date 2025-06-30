import React from 'react'
import CartItems from './CartItems'
import EmptyCart from './EmptyCart'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Header from '../Header/Header'

const Cart = () => {
  const { productsAdded } = useSelector((store) => store.productStore)
  return (
    <>
      <Header />
      <div className='container'>
        {/* heading */}
        <div className='d-flex align-items-center justify-content-between border-bottom p-3'>
          <h2 className='fs-5 fw-normal'>
            My Cart ({Object.keys(productsAdded).length})
          </h2>
          <NavLink to={'/checkout'}>
            <button className=' px-3 py-2 border border-light rounded  fw-bold  text-light bg-primary'>
              Check Out
            </button>
          </NavLink>
        </div>
        {/* cart container */}
        <div className='d-flex flex-column'>
          {Object.keys(productsAdded).length > 0 ? (
            <CartItems />
          ) : (
            <EmptyCart />
          )}
        </div>
        {/* cart container ends */}
      </div>
    </>
  )
}

export default Cart
