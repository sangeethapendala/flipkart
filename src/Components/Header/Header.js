import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { setCurrentPath } from '../../ReduxStore/userSlice'
import {
  Person,
  Inbox,
  Cart,
  Heart,
  Power,
  PatchPlus,
  Gift,
  Box2Heart,
  Search,
} from 'react-bootstrap-icons'
import Dropdown from 'react-bootstrap/Dropdown'
import SplitButton from 'react-bootstrap/SplitButton'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { auth } from '../../utils/firebase'
import { signOut } from 'firebase/auth'
import { setUserInfo } from '../../ReduxStore/userSlice'
import { emptyItems } from '../../ReduxStore/productSlice'
import { setSearchText } from '../../ReduxStore/filterSlice'

const Header = () => {
  const { productsAdded } = useSelector((store) => store.productStore)
  const { userInfo } = useSelector((store) => store.userStore)
  const { windowWidth } = useSelector((store) => store.userStore)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const [userInput, setUserInput] = useState('')
  const handleLogin = () => {
    dispatch(setCurrentPath(location.pathname))
    navigate('/login')
  }

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch(setUserInfo(null))
        navigate('/')
        dispatch(emptyItems())
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
  }

  return (
    <section className='bg-primary'>
      <div className='container'>
        {windowWidth > 768 ? (
          <div className='row d-flex align-items-center'>
            <div className='col-lg-5'>
              <div className='row d-flex align-items-center'>
                <div className='col-lg-3'>
                  <Link to={'/'} className='text-decoration-none'>
                    <span
                      href='#'
                      className='fs-5 text-white text-decoration-none fw-bold'
                    >
                      Flipkart
                    </span>
                    <h6 className='text-white fw-light fst-italic'>
                      Explore<span className='text-warning ps-1'>Plus</span>
                    </h6>
                  </Link>
                </div>
                <div className='col-lg-9'>
                  <div className='d-flex align-items-center justify-content-around gap-3 bg-light border-none'>
                    <Search
                      className='pe-1 ps-1 fw-bold fs-3'
                      onClick={() => {
                        dispatch(setSearchText(userInput))
                        navigate('/productPage/all')
                      }}
                    />
                    <input
                      className='border-none outline-none form-control'
                      list='datalistOptions'
                      id='exampleDataList'
                      placeholder='search for products and more...'
                      type='text'
                      value={userInput}
                      onChange={(e) => {
                        setUserInput(e.target.value)
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-7 text-light text-start'>
              <div className='row d-flex align-items-baseline'>
                <div className='col-lg-3 ' style={{ cursor: 'pointer' }}>
                  <div>
                    {[SplitButton].map((DropdownType, idx) => (
                      <DropdownType
                        as={ButtonGroup}
                        key={idx}
                        id={`dropdown-button-drop-${idx}`}
                        size='md'
                        variant='primary'
                        title={
                          userInfo ? (
                            <h2 className='text-light fs-5 fw-bold d-flex align-items-center'>
                              <Person className='pe-2 fs-3' />
                              {userInfo.displayName}
                            </h2>
                          ) : (
                            <h2
                              className='text-light fs-5 fw-bold d-flex align-items-center'
                              onClick={() => handleLogin()}
                            >
                              <Person className='pe-2 fs-3' />
                              Login
                            </h2>
                          )
                        }
                        className='fw-bold'
                      >
                        <Dropdown.Item
                          eventKey='1'
                          className='d-flex align-items-center'
                          onClick={() => navigate('/wishList')}
                        >
                          <Heart className='pe-1 fs-5' />
                          <h2 className='fs-6 ps-2 fw-normal'> WishList</h2>
                        </Dropdown.Item>

                        <Dropdown.Item
                          eventKey='2'
                          className='d-flex align-items-center'
                          onClick={() => navigate('/plusZone')}
                        >
                          <PatchPlus className='pe-1 fs-5' />
                          <h2 className='fs-6 ps-2 fw-normal'>
                            Flipkart Plus Zone
                          </h2>
                        </Dropdown.Item>
                        <Dropdown.Item
                          eventKey='3'
                          className='d-flex align-items-center'
                          onClick={() => navigate('/giftCard')}
                        >
                          <Gift className='pe-1 fs-5' />
                          <h2 className='fs-6 ps-2 fw-normal'>GiftCards</h2>
                        </Dropdown.Item>
                        <Dropdown.Item
                          eventKey='3'
                          className='d-flex align-items-center'
                          onClick={() => navigate('/coupons')}
                        >
                          <Box2Heart className='pe-1 fs-5' />
                          <h2 className='fs-6 ps-2 fw-normal'>Coupons</h2>
                        </Dropdown.Item>

                        {userInfo && (
                          <>
                            <Dropdown.Divider />
                            <Dropdown.Item
                              eventKey='4'
                              className='d-flex align-items-center'
                              onClick={() => {
                                handleLogout()
                              }}
                            >
                              <Power className='pe-1 fs-4' />
                              <h2 className='fs-6 ps-2 fw-normal'> Logout</h2>
                            </Dropdown.Item>
                          </>
                        )}
                      </DropdownType>
                    ))}
                  </div>
                </div>

                <div className='col-lg-4'>
                  <Link to={'/seller'} className='text-decoration-none'>
                    <h2 className='fw-bold fs-5 text-light '>
                      <Inbox className='pe-2 fs-3' />
                      Become a Seller
                    </h2>
                  </Link>
                </div>
                <div className='col-lg-2'>
                  <Link to={'/more'} className='text-decoration-none'>
                    <h2 className='fw-bold fs-5 text-light '>
                      {/* <CaretDown className='pe-2 fs-3' /> */}
                      More
                    </h2>
                  </Link>
                </div>
                {/* <div className='col-lg-2'>
                <Link to={'/wishlist'} className='text-decoration-none'>
                  <div className='fw-bold fs-5 text-light'>
                    
                    wishList
                    <span> ()</span>
                  </div>
                </Link>
              </div> */}
                <div className='col-lg-3'>
                  <Link to={'/cart'} className='text-decoration-none'>
                    <div className='fw-bold fs-5 text-light'>
                      <Cart className='pe-2 fs-3' />
                      Cart
                      <span> ({Object.keys(productsAdded).length})</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div class='row'>
              <div class='col-4'>
                <div className='d-flex align-items-center'>
                  <Link to={'/'} className='text-decoration-none'>
                    <span
                      href='#'
                      className='fs-5 text-white text-decoration-none fw-bold'
                    >
                      Flipkart
                    </span>
                    <h6 className='text-white fw-light fst-italic'>
                      Explore<span className='text-warning ps-1'>Plus</span>
                    </h6>
                  </Link>
                </div>
              </div>
              <div class='col-8 text-light text-start'>
                <div className='row d-flex align-items-baseline'>
                  <div className='col-8 ' style={{ cursor: 'pointer' }}>
                    <div>
                      {[SplitButton].map((DropdownType, idx) => (
                        <DropdownType
                          as={ButtonGroup}
                          key={idx}
                          id={`dropdown-button-drop-${idx}`}
                          size='md'
                          variant='primary'
                          title={
                            userInfo ? (
                              <h2 className='text-light fs-5 fw-bold d-flex align-items-center'>
                                <Person className='pe-2 fs-3' />
                                {userInfo.displayName}
                              </h2>
                            ) : (
                              <h2
                                className='text-light fs-5 fw-bold d-flex align-items-center'
                                onClick={() => handleLogin()}
                              >
                                <Person className='pe-2 fs-1' />
                                Login
                              </h2>
                            )
                          }
                          className='fw-bold'
                        >
                          <Dropdown.Item
                            eventKey='1'
                            onClick={() => navigate('/wishList')}
                          >
                            <Heart className='fs-5' />
                            <h2 className='fs-6 fw-normal'> WishList</h2>
                          </Dropdown.Item>

                          <Dropdown.Item
                            eventKey='2'
                            onClick={() => navigate('/plusZone')}
                          >
                            <PatchPlus className='pe-1 fs-5' />
                            <h2 className='fs-6 ps-2 fw-normal'>
                              Flipkart Plus Zone
                            </h2>
                          </Dropdown.Item>
                          <Dropdown.Item
                            eventKey='3'
                            onClick={() => navigate('/giftCard')}
                          >
                            <Gift className='pe-1 fs-5' />
                            <h2 className='fs-6 ps-2 fw-normal'>GiftCards</h2>
                          </Dropdown.Item>
                          <Dropdown.Item
                            eventKey='3'
                            onClick={() => navigate('/coupons')}
                          >
                            <Box2Heart className='pe-1 fs-5' />
                            <h2 className='fs-6 ps-2 fw-normal'>Coupons</h2>
                          </Dropdown.Item>

                          {userInfo && (
                            <>
                              <Dropdown.Divider />
                              <Dropdown.Item
                                eventKey='4'
                                className='d-flex align-items-center'
                                onClick={() => {
                                  handleLogout()
                                }}
                              >
                                <Power className='pe-1 fs-4' />
                                <h2 className='fs-6 ps-2 fw-normal'> Logout</h2>
                              </Dropdown.Item>
                            </>
                          )}
                        </DropdownType>
                      ))}
                    </div>
                  </div>

                  <div className='col-4'>
                    <Link to={'/cart'} className='text-decoration-none'>
                      <div className='fw-bold fs-5 text-light'>
                        <Cart className='fs-3' />
                        <span> ({Object.keys(productsAdded).length})</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default Header
