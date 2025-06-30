import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
// import seller from '../../Assets/img/seller.webp'
import desktop from '../../Assets/img/Desktop_sell.webp'
import raju from '../../Assets/img/Raju_yellow.webp'
import dinesh from '../../Assets/img/Dinesh_yellow.webp'
import vinay from '../../Assets/img/Vinay_Garg_yellow.webp'
import Header from './Header'

const Seller = () => {
  return (
    <>
      <Header />
      <div className='container mt-5'>
        <div className='row d-flex  align-items-center'>
          <div className='col-lg-5'>
            <h2 className='fw-bold'>
              Become a Flipkart Seller and sell to 45+Crore customers
            </h2>
          </div>
          <div className='col-lg-7'>
            <img className=' w-100' src={desktop} alt='seller' />
          </div>
        </div>
        {/* Carousel */}
        <div className='ps-3'>
          <Carousel>
            <Carousel.Item>
              <div className='d-flex'>
                <div className='rounded-border'>
                  <img className='d-block w-100' src={raju} alt='First slide' />
                </div>
                <div>
                  <h3>Raju Lunawath,A</h3>
                  <p>
                    When from offline to online business,Our aim was to sell
                    300orders pre month.Today we sell 700 oders per day and this
                    has been possible because of growth feature on the filpkart
                    seller Dashboard,Flipkart Ads and regular payment.
                  </p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className='d-flex'>
                <div>
                  <img
                    className='d-block w-100'
                    src={dinesh}
                    alt='First slide'
                  />
                </div>
                <div>
                  <h3>Dinesh kumar Rajpurohit.Kemei</h3>
                  <p>
                    When from offline to online business,Our aim was to sell
                    300orders pre month.Today we sell 700 oders per day and this
                    has been possible because of growth feature on the filpkart
                    seller Dashboard,Flipkart Ads and regular payment.
                  </p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className='d-flex'>
                <div>
                  <img
                    className='d-block w-100'
                    src={vinay}
                    alt='First slide'
                  />
                </div>

                <div>
                  <h3>Vinay Garg,Activa & Digi Smart</h3>
                  <p>
                    When from offline to online business,Our aim was to sell
                    300orders pre month.Today we sell 700 oders per day and this
                    has been possible because of growth feature on the filpkart
                    seller Dashboard,Flipkart Ads and regular payment.
                  </p>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
        {/* seller */}
        <div className='row d-flex  align-items-center mt-4'>
          <div className='col-lg-3 d-flex flex-column align-items-center'>
            <h2 className='text-primary'>14 Lakh+</h2>
            <p>Seller Community</p>
          </div>
          <div className='col-lg-3 d-flex flex-column align-items-center'>
            <h2 className='text-primary'>24*7</h2>
            <p>Online Business</p>
          </div>
          <div className='col-lg-3 d-flex flex-column align-items-center'>
            <h2 className='text-primary'>7</h2>
            <p>days * payment</p>
          </div>
          <div className='col-lg-3 d-flex flex-column align-items-center'>
            <h2 className='text-primary'>19000+</h2>
            <p>Pincodes Served</p>
          </div>
        </div>
        {/* <div>
        <h2>Why do sellers love selling on ️Flipkart?</h2>
        <p>
          45 crore+ customers across India trust Flipkart.com to be their number
          1 online shopping destination. It is no surprise that more than a
          million sellers trust their products to be made available 24x7 on
          Flipkart.
        </p>
      </div> */}
      </div>
    </>
  )
}

export default Seller
