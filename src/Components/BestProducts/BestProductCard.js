import React from 'react'
import { WindowDash } from 'react-bootstrap-icons'
import { useSelector } from 'react-redux'

const BestProductCard = (props) => {
  const { windowWidth } = useSelector((store) => store.userStore)
  return (
    <>
      {windowWidth > 768 ? (
        <div className='d-flex flex-column justify-content-end align-items-center col-lg-4'>
          <div>
            <img
              src={props.value.images[0].url}
              className='card-img-top w-100'
              style={{ height: '9rem' }}
            />
          </div>
          <span className='fs-6 text-dark py-2'>
            {props.value.specificaton[0].type}
          </span>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}

export default BestProductCard
