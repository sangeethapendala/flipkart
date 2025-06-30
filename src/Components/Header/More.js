import React from 'react'
import Header from './Header'
// import store from '../../Assets/img/App-Store.png'
// import googleplay from '../../Assets/img/Play-Store.png'
const More = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <h2>Flipkart Help Center | 24x7 Customer Care Support</h2>
        <p>
          The Flipkart Help Centre page lists out various types of issues that
          you may have encountered so that there can be quick resolution and you
          can go back to shopping online. For example, you can get more
          information regarding order tracking, delivery date changes, help with
          returns (and refunds), and much more. The Flipkart Help Centre also
          lists out more information that you may need regarding Flipkart Plus,
          payment, shopping, and more. The page has various filters listed out
          on the left-hand side so that you can get your queries solved quickly,
          efficiently, and without a hassle. You can get the Flipkart Help
          Centre number or even access Flipkart Help Centre support if you need
          professional help regarding various topics. The support executive will
          ensure speedy assistance so that your shopping experience is positive
          and enjoyable. You can even inform your loved ones of the support page
          so that they can properly get their grievances addressed as well. Once
          you have all your queries addressed, you can pull out your shopping
          list and shop for all your essentials in one place. You can shop
          during festive sales to get your hands on some unbelievable deals
          online. This information is updated on 21-Dec-23
        </p>
        {/* <img src={store} alt='lo' />
      <img src={googleplay} alt='lo' /> */}
        <h2>Types and Topics of Support in Flipkart Help Centre </h2>
        <p>
          Apart from helping you with your orders and/or your delivered
          product-related issues, you can find various other support at Flipkart
          Help Centre. You can select from three types of issues here - help
          with your issues, help with your order, and help with other issues.
          You can track your orders here, manage your orders, get help with your
          returns and refunds issues, and even get help related to various other
          issues, such as offers, payment, Flipkart Plus, etc. There are also
          details about specific help topics, such as cancellations and returns,
          wallet, insurance, Flipkart Quick, SuperCoins, Gift Card, etc.
          available here. So, log on to your Flipkart account and shop without
          hassles and with complete help and support.{' '}
        </p>
      </div>
    </>
  )
}

export default More
