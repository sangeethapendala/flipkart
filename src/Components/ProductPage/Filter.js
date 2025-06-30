import React from 'react'
import { useDispatch } from 'react-redux'
import {
  removeDiscount,
  removeRating,
  setDiscount,
  setRating,
} from '../../ReduxStore/filterSlice'
import { Star, StarFill } from 'react-bootstrap-icons'
import { useSelector } from 'react-redux'

const Filter = (props) => {
  const { windowWidth } = useSelector((store) => store.userStore)
  const dispatch = useDispatch()
  const handleRating = (val) => {
    // console.log(val)//yentha rting click panromo antha value katum
    val.target.checked
      ? dispatch(setRating(val.target.value))
      : dispatch(removeRating(val.target.value))
  }
  const handleDiscount = (val) => {
    val.target.checked
      ? dispatch(setDiscount(val.target.value))
      : dispatch(removeDiscount(val.target.value))
  }
  return (
    <section>
      {windowWidth > 768 ? (
        <>
          <div>
            <h2 className='fw-normal fs-4'>FILTERS</h2>
            <h2 className='fw-normal fs-6'>CUSTOMER RATINGS</h2>
            <div className='d-flex align-items-baseline'>
              <input
                type='checkbox'
                id='topping'
                name='topping'
                value='4'
                className='me-2'
                onChange={(e) => handleRating(e)}
              />
              <h2 className='fw-normal fs-6 d-flex align-items-center'>
                4 <StarFill className='fw-normal fs-6 mx-1' /> & above
              </h2>
            </div>
            <div className='d-flex align-items-baseline'>
              <input
                type='checkbox'
                id='topping'
                name='topping'
                value='3'
                className='me-2'
                onChange={(e) => handleRating(e)}
              />
              <h2 className='fw-normal fs-6 d-flex align-items-center'>
                3 <StarFill className='fw-normal fs-6 mx-1' /> & above
              </h2>
            </div>
            <div className='d-flex align-items-baseline'>
              <input
                type='checkbox'
                id='topping'
                name='topping'
                value='2'
                className='me-2'
                onChange={(e) => handleRating(e)}
              />
              <h2 className='fw-normal fs-6 d-flex align-items-center'>
                2 <StarFill className='fw-normal fs-6 mx-1' /> & above
              </h2>
            </div>
            <div className='d-flex align-items-baseline'>
              <input
                type='checkbox'
                id='topping'
                name='topping'
                value='1'
                className='me-2'
                onChange={(e) => handleRating(e)}
              />
              <h2 className='fw-normal fs-6 d-flex align-items-center'>
                1 <StarFill className='fw-normal fs-6 mx-1' /> & above
              </h2>
            </div>
          </div>
          <div className='mt-5'>
            <h2 className='text-black fw-normal fs-6'>DISCOUNT</h2>
            <div>
              <input
                type='checkbox'
                id='topping'
                name='topping'
                value='50'
                className='me-2'
                onChange={(e) => handleDiscount(e)}
              />
              50% or more
            </div>
            <div>
              <input
                type='checkbox'
                id='topping'
                name='topping'
                value='40'
                className='me-2'
                onChange={(e) => handleDiscount(e)}
              />
              40% or more
            </div>
            <div>
              <input
                type='checkbox'
                id='topping'
                name='topping'
                value='30'
                className='me-2'
                onChange={(e) => handleDiscount(e)}
              />
              30% or more
            </div>
            <div>
              <input
                type='checkbox'
                id='topping'
                name='topping'
                value='20'
                className='me-2'
                onChange={(e) => handleDiscount(e)}
              />
              20% or more
            </div>
            <div>
              <input
                type='checkbox'
                id='topping'
                name='topping'
                value='10'
                className='me-2'
                onChange={(e) => handleDiscount(e)}
              />
              10% or more
            </div>
          </div>
        </>
      ) : (
        <>
          <h2 className='fw-normal fs-4'>FILTERS</h2>
          <div className='row'>
            <div className='col-6'>
              <h2 className='fw-normal fs-6'>CUSTOMER RATINGS</h2>
              <div className='d-flex align-items-baseline'>
                <input
                  type='checkbox'
                  id='topping'
                  name='topping'
                  value='4'
                  className='me-2'
                  onChange={(e) => handleRating(e)}
                />
                <h2 className='fw-normal fs-6 d-flex align-items-center'>
                  4 <StarFill className='fw-normal fs-6 mx-1' /> & above
                </h2>
              </div>
              <div className='d-flex align-items-baseline'>
                <input
                  type='checkbox'
                  id='topping'
                  name='topping'
                  value='3'
                  className='me-2'
                  onChange={(e) => handleRating(e)}
                />
                <h2 className='fw-normal fs-6 d-flex align-items-center'>
                  3 <StarFill className='fw-normal fs-6 mx-1' /> & above
                </h2>
              </div>
              <div className='d-flex align-items-baseline'>
                <input
                  type='checkbox'
                  id='topping'
                  name='topping'
                  value='2'
                  className='me-2'
                  onChange={(e) => handleRating(e)}
                />
                <h2 className='fw-normal fs-6 d-flex align-items-center'>
                  2 <StarFill className='fw-normal fs-6 mx-1' /> & above
                </h2>
              </div>
              <div className='d-flex align-items-baseline'>
                <input
                  type='checkbox'
                  id='topping'
                  name='topping'
                  value='1'
                  className='me-2'
                  onChange={(e) => handleRating(e)}
                />
                <h2 className='fw-normal fs-6 d-flex align-items-center'>
                  1 <StarFill className='fw-normal fs-6 mx-1' /> & above
                </h2>
              </div>
            </div>
            <div className='col-6'>
              <h2 className='text-black fw-normal fs-6'>DISCOUNT</h2>

              <div>
                <input
                  type='checkbox'
                  id='topping'
                  name='topping'
                  value='40'
                  className='me-2'
                  onChange={(e) => handleDiscount(e)}
                />
                40% or more
              </div>
              <div>
                <input
                  type='checkbox'
                  id='topping'
                  name='topping'
                  value='30'
                  className='me-2'
                  onChange={(e) => handleDiscount(e)}
                />
                30% or more
              </div>
              <div>
                <input
                  type='checkbox'
                  id='topping'
                  name='topping'
                  value='20'
                  className='me-2'
                  onChange={(e) => handleDiscount(e)}
                />
                20% or more
              </div>
              <div>
                <input
                  type='checkbox'
                  id='topping'
                  name='topping'
                  value='10'
                  className='me-2'
                  onChange={(e) => handleDiscount(e)}
                />
                10% or more
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  )
}

export default Filter
