import React from 'react'
import Footer from '../Footer/Footer'
import RouterNavigation from '../RouterNavigation/RouterNavigation'
import { HashRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { setWindowWidth } from '../../ReduxStore/userSlice'

const Body = () => {
  const { windowWidth } = useSelector((store) => store.userStore)
  const dispatch = useDispatch()
  useEffect(() => {
    const handleResize = () => {
      dispatch(setWindowWidth(window.innerWidth))
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <div>
      <HashRouter>
        <RouterNavigation />
        {windowWidth > 768 && <Footer />}
      </HashRouter>
    </div>
  )
}

export default Body
