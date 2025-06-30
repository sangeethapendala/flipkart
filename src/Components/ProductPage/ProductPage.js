import React from 'react'
import Header from '../Header/Header'
import ProductTitle from '../Banner/ProductTitle'
import Filter from './Filter'
import './ProductPage.css'
import ProductPageCard from './ProductPageCard'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setSortBy } from '../../ReduxStore/filterSlice'

const ProductPage = () => {
  const { category } = useParams()
  const dispatch = useDispatch()
  // console.log(category)
  const handleSortBy = (el) => {
    // console.log(el)
    dispatch(setSortBy(el.target.id))
  }
  const { windowWidth } = useSelector((store) => store.userStore)
  return (
    <>
      <Header />
      <ProductTitle />
      <section className=' mt-5'>
        <div className='container '>
          <div className='row'>
            <div className='col-lg-2'>
              <Filter value={category} />
            </div>

            <div className='col-lg-10 d-flex flex-wrap bg-light'>
              {/* sorting */}
              {windowWidth > 768 ? (
                <>
                  <div className='d-flex mb-2 col-lg-12'>
                    <h2 className='fw-normal fs-4 pe-4'>Sort By:</h2>
                    <h2
                      className='fw-normal fs-4 pe-4'
                      id='popular'
                      onClick={(e) => handleSortBy(e)}
                    >
                      Popularity
                    </h2>
                    <h2
                      className='fw-normal fs-4 pe-4'
                      id='low2high'
                      onClick={(e) => handleSortBy(e)}
                    >
                      Price-Low to High
                    </h2>
                    <h2
                      className='fw-normal fs-4'
                      id='high2low'
                      onClick={(e) => handleSortBy(e)}
                    >
                      Price-High to Low
                    </h2>
                  </div>
                </>
              ) : (
                <>
                  {' '}
                  <div className='d-flex mb-2 mt-4 col-lg-12'>
                    <h2 className='fw-normal fs-6 pe-2'>Sort By:</h2>
                    <h2
                      className='fw-normal fs-6 pe-4'
                      id='popular'
                      onClick={(e) => handleSortBy(e)}
                    >
                      Popularity
                    </h2>
                    <h2
                      className='fw-normal fs-6 pe-4'
                      id='low2high'
                      onClick={(e) => handleSortBy(e)}
                    >
                      Price-Low to High
                    </h2>
                    <h2
                      className='fw-normal fs-6'
                      id='high2low'
                      onClick={(e) => handleSortBy(e)}
                    >
                      Price-High to Low
                    </h2>
                  </div>
                </>
              )}

              <ProductPageCard value={category} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductPage
