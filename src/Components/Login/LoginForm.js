import React, { useRef, useState, useContext } from 'react'
import { checkValidData } from '../../utils/validate'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth'
import { auth } from '../../utils/firebase'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { setUserInfo } from '../../ReduxStore/userSlice'

const LoginForm = () => {
  const [isSignedIn, setIsSignedIn] = useState(true)
  const [errMessage, setErrMessage] = useState(null)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { currentPath } = useSelector((store) => store.userStore)

  const email = useRef(null)
  const password = useRef(null)
  const username = useRef(null)

  const handleButtonClick = () => {
    //validate the form
    const message = checkValidData(email.current.value, password.current.value)
    setErrMessage(message)
    // console.log(email)
    // console.log(password)
    // console.log(message)
    if (message) return
    if (!isSignedIn) {
      //sign up form
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user
          console.log(user)
          updateProfile(auth.currentUser, {
            displayName: username.current.value,
          })
            .then(() => {
              // Profile updated!
              dispatch(setUserInfo(user))
              navigate(currentPath)
            })
            .catch((error) => {
              // An error occurred
              // ...
            })
        })

        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          setErrMessage(errorCode + '-' + errorMessage)
          // ..
        })
    } else {
      // sign in form
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user
          dispatch(setUserInfo(user))

          navigate(currentPath)
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          setErrMessage(errorCode + '-' + errorMessage)
        })
    }
  }

  const toggleSignIn = () => {
    setIsSignedIn(!isSignedIn)
  }
  return (
    <form className='bg-white text-black' onSubmit={(e) => e.preventDefault()}>
      <h1 className='fw-bold fs-1 py-2'>
        {isSignedIn ? 'Login In' : 'Sign Up'}
      </h1>
      {!isSignedIn && (
        <input
          ref={username}
          placeholder='Full Name'
          className='w-75 p-3 my-2 bg-gray-800'
        />
      )}
      <input
        ref={email}
        placeholder='Email Adderss'
        type='text'
        className='w-75 p-3 my-2 mx-auto '
      />
      <input
        ref={password}
        placeholder='password'
        type='password'
        className='w-75 p-3 my-2 mx-auto '
      />
      <p>{errMessage}</p>
      <button
        className='w-50 p-3 my-2 rounded buy border-0 '
        onClick={handleButtonClick}
      >
        {isSignedIn ? 'Login' : 'Sign Up'}
      </button>
      <p className='user-select-none' onClick={toggleSignIn}>
        {isSignedIn
          ? 'New to Flipkart? Create an Account'
          : 'Already Registered. Login'}
      </p>
    </form>
  )
}

export default LoginForm
