import React, { useState, useCallback, useEffect } from 'react'
import CartItems from '../Cart/CartItems'
import useRazorpay from 'react-razorpay'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import SuperCoins2 from '../../Assets/img/promotion_banner_v2_inactive_2.webp'
import Header from '../Header/Header'
import { setCurrentPath } from '../../ReduxStore/userSlice'

const CheckOutOrder = () => {
  const { productsAdded } = useSelector((store) => store.productStore)
  const { userInfo } = useSelector((store) => store.userStore)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()

  const [totalAmount, setTotalAmount] = useState({
    total: 0,
    tax: 0,
    delivery: Object.keys(productsAdded).length > 0 ? 50 : 0,
  })

  const [Razorpay] = useRazorpay()

  useEffect(() => {
    let TotalAmount = 0
    let TaxAmount = 0
    Object.keys(productsAdded).map((val) => {
      TotalAmount =
        TotalAmount + productsAdded[val].price * productsAdded[val].count
      TaxAmount =
        TaxAmount +
        (productsAdded[val].price * productsAdded[val].count * 18) / 100
    })
    setTotalAmount((prev) => ({
      ...prev,
      total: TotalAmount,
      tax: TaxAmount,
      delivery: Object.keys(productsAdded).length > 0 ? 50 : 0,
    }))
  }, [productsAdded])
  const handlePayment = async (params) => {
    // const order = await createOrder(params) //  Create order on your backend

    const options = {
      key: 'rzp_test_HCL5jMsuSBxtxq',
      amount: parseInt(
        (totalAmount.total + totalAmount.delivery + totalAmount.tax) * 100
      ), // Amount in paisa
      name: 'SPK FEDS',
      description: 'Product or Service Description',
      image: 'https://your-company-logo.png',
      handler: function (response) {
        navigate('/ordersummary')
      },
      prefill: {
        name: 'SHALINI',
        email: 'customer@example.com',
        contact: 'customer_contact_number',
      },
    }

    const paymentObject = new window.Razorpay(options)
    paymentObject.open()
  }

  return (
    <>
      <Header />
      <div className='container mt-3'>
        <div className='row'>
          {/* left side starts */}
          <div className='col-lg-8'>
            {/* LOGIN starts*/}
            <div className='shadow p-3 pb-2 mb-4 bg-white rounded d-flex gap-4'>
              <div>
                <p className='bg-light px-2 py-0 fs-5'>1.</p>
              </div>
              <div>
                <h2 className='fs-5 fw-bold text-secondary'>LOGIN</h2>
                <p className='fs-5 fw-normal text-dark'>
                  {userInfo ? userInfo.displayName : ' Hello,Guest'}
                </p>
              </div>
            </div>
            {/* LOGIN ends */}
            {/* DELIVERY starts */}
            <div className='shadow p-3 pb-2 mb-4 bg-white rounded d-flex gap-4'>
              <div>
                <p className='bg-light px-2 py-0 fs-5'>2.</p>
              </div>
              <div>
                <h2 className='fs-5 fw-bold text-secondary'>
                  DELIVERY ADDRESS
                </h2>
                <p className='fs-5 fw-normal text-dark mb-0'>
                  ShaliniPremKumar, Poiyerikarai, Namakkal
                </p>
                <p className='fs-5 fw-normal text-dark'>Pincode: 637001</p>
              </div>
            </div>
            {/* DELIVERY ends */}
            {/* ORDER SUMMARY starts */}
            <div className='shadow p-3 pb-2 mb-4 bg-white rounded '>
              <div className='d-flex gap-4'>
                <div>
                  <p className='bg-light px-2 py-0 fs-5'>3.</p>
                </div>
                <div>
                  <h2 className='fs-5 fw-bold text-secondary'>ORDER SUMMARY</h2>
                </div>
              </div>
              <CartItems />
            </div>
            {/* ORDER SUMMARY ends */}
            {/* PAYMENT OPTION starts */}
            <div className='shadow p-3 pb-0 mb-4 bg-primary rounded '>
              <div className='d-flex gap-4'>
                <div>
                  <p className='bg-light px-2 py-0 fs-5'>4.</p>
                </div>
                <div>
                  <h2 className='fs-5 fw-bold text-light'>PAYMENT OPTION</h2>
                </div>
              </div>
            </div>
            <div className='mt-3 ms-3'>
              {userInfo ? (
                <button
                  onClick={() => handlePayment()}
                  className='text-primary fs-5 fw-normal  border border-primary px-4 py-1'
                >
                  PayHere
                </button>
              ) : (
                <button
                  onClick={() => {
                    dispatch(setCurrentPath(location.pathname))
                    navigate('/login')
                  }}
                  className='text-primary fs-5 fw-normal  border border-primary px-4 py-1'
                >
                  Login To Proceed
                </button>
              )}
            </div>

            {/* PAYMENT OPTION ends */}
          </div>
          {/* left side ends */}

          {/* right side starts /payment portion*/}

          <div className='col-lg-4'>
            <div className=' p-6  border-bottom'>
              <h2 className='fs-4 fw-normal text-secondary text-center'>
                Price Description
              </h2>
            </div>
            <div className='p-4'>
              <ul className=' border-dashed border-bottom border-black p-3'>
                <li className=' d-flex justify-content-between'>
                  <h2 className='fs-6 fw-normal pb-2 text-dark'>
                    Products ({Object.keys(productsAdded).length} items)
                  </h2>
                  <h2 className='fs-6 fw-normal pb-2 text-dark'>
                    Rs. {totalAmount.total.toFixed(2)}
                  </h2>
                </li>
                <li className=' d-flex justify-content-between '>
                  <h2 className='fs-6 fw-normal pb-2 text-dark'>
                    Delivery Charge
                  </h2>
                  <h2 className='fs-6 fw-normal pb-2 text-dark'>
                    Rs. {totalAmount.delivery}
                  </h2>
                </li>
                <li className=' d-flex justify-content-between '>
                  <h2 className='fs-6 fw-normal text-dark'>Tax in Amount</h2>
                  <h2 className='fs-6 fw-normal pb-2 text-dark'>
                    Rs. {totalAmount.tax.toFixed(2)}
                  </h2>
                </li>
              </ul>

              <div className=' border-bottom border-black px-3 d-flex justify-content-between align-items-center'>
                <h2 className='fs-5 fw-normal text-dark'>Total Amount</h2>
                <h2 className='fs-3'>
                  Rs.
                  {(
                    totalAmount.total +
                    totalAmount.delivery +
                    totalAmount.tax
                  ).toFixed(2)}
                </h2>
              </div>
              <div className='mt-3 '>
                <img className='w-100 py-2' src={SuperCoins2} />
              </div>
              <div className='mt-3 d-flex align-items-center'>
                <div className='me-2'>
                  <img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/shield_5f9216.png' />
                </div>
                <h6 className='text-muted  fw-normal fs-6'>
                  Save and Secure Payment. Easy Returns. 100% Authentic Products
                </h6>
              </div>
            </div>
          </div>

          {/* right side ends */}
        </div>
      </div>
    </>
  )
}

export default CheckOutOrder
