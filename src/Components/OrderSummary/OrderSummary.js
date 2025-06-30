import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { emptyItems } from '../../ReduxStore/productSlice'
import Header from '../Header/Header'

const OrderSummary = () => {
  const { productsAdded } = useSelector((store) => store.productStore)
  const dispatch = useDispatch()
  const [orderSummary, setOrderSummary] = useState(productsAdded)
  useEffect(() => {
    setOrderSummary(productsAdded)
    dispatch(emptyItems())
  }, [])
  return (
    <>
      <Header />
      <div className='container'>
        <h1 className='d-flex justify-content-center'>ITEMS SUMMARY</h1>{' '}
        <div className='row d-flex gap-3'>
          {Object.keys(orderSummary).length ? (
            Object.keys(orderSummary).map((el) => {
              return (
                <div className='col-lg-10 shadow-sm p-3  bg-white rounded d-flex'>
                  <h2 className='fw-normal fs-5 col-lg-8'>
                    {orderSummary[el].name}
                  </h2>
                  <h2 className='fw-bold fs-5 col-lg-4'>
                    Rs. {orderSummary[el].price} * {orderSummary[el].count} =
                    Rs.
                    {orderSummary[el].price * orderSummary[el].count}
                  </h2>
                </div>
              )
            })
          ) : (
            <h3 className='text-primary d-flex justify-content-center p-5'>
              Kindly place an Order to display in summary
            </h3>
          )}
          {/* <div className='col-lg-3 shadow p-3 mb-5 bg-white rounded'>
            <h2>Delivered To:</h2>
            <p>shalini,</p>
            <p>Poiyerikarai, Namakkal. </p>
            <p>Pincode: 637001</p>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default OrderSummary
