import React from 'react'
import Header from '../Header/Header'
import LoginForm from './LoginForm'
import flipkart from '../../Assets/img/Flipkart-sees-rural-shoppers-increase-online-shopping.jpg'
import { useSelector } from 'react-redux'

const Login = () => {
  const { windowWidth } = useSelector((store) => store.userStore)
  return (
    <>
      {windowWidth > 768 ? (
        <div className='d-flex justify-content-center '>
          <div>
            <img src={flipkart} alt='IMG' className='w-100' />
          </div>
          <LoginForm />
        </div>
      ) : (
        <div className='container'>
          <div className='row'>
            <div>
              <img src={flipkart} alt='IMG' className='w-100' />
            </div>
            <LoginForm />
          </div>
        </div>
      )}
    </>
  )
}

export default Login
