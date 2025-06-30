import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Seller from '../Header/Seller'
import More from '../Header/More'
import Home from '../Home/Home'
import ProductPage from '../ProductPage/ProductPage'
import ProductDetails from '../ProductDetails/ProductDetails'
import Cart from '../Cart/Cart'
import CheckOutOrders from '../Orders/CheckOutOrders'
import OrderSummary from '../OrderSummary/OrderSummary'
import Login from '../Login/Login'
import WishList from '../WishList/WishList'
import PlusZone from '../Header/PlusZone'
import GiftCard from '../Header/GiftCard'
import Coupons from '../Header/Coupons'

const RouterNavigation = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/productPage/:category' element={<ProductPage />} />
        <Route path='/seller' element={<Seller />} />
        <Route path='/more' element={<More />} />
        <Route path='/plusZone' element={<PlusZone />} />
        <Route path='/giftCard' element={<GiftCard />} />
        <Route path='/coupons' element={<Coupons />} />
        <Route path='/productDetails/:id' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<CheckOutOrders />} />
        <Route path='/orderSummary' element={<OrderSummary />} />
        <Route path='/wishlist' element={<WishList />} />
      </Routes>
    </>
  )
}

export default RouterNavigation
