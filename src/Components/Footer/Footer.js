import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <footer>
      <section className='footer-sec pt-5 pb-3'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-7'>
              <div className='row'>
                <div className='col-lg-3 d-flex flex-column align-items-center'>
                  <h2 className='fs-6 fw-light'>ABOUT</h2>
                  <ul>
                    <li>contact us</li>
                    <li>about us</li>
                    <li>careers us</li>
                    <li>flipkart stories</li>
                    <li>press</li>
                    <li>flipkart wholesale</li>
                    <li>corporate information</li>
                  </ul>
                </div>
                <div className='col-lg-3 d-flex flex-column align-items-center'>
                  <h2 className='fs-6 fw-light'>HELP</h2>
                  <ul>
                    <li>payments</li>
                    <li>shipping</li>
                    <li>cancellation & returns</li>
                    <li>FAQ</li>
                    <li>report infringement</li>
                  </ul>
                </div>
                <div className='col-lg-3 d-flex flex-column align-items-center'>
                  <h2 className='fs-6 fw-light'>POLICY</h2>
                  <ul>
                    <li>cancellation & returns</li>
                    <li>terms of use</li>
                    <li>security</li>
                    <li>privacy</li>
                    <li>sitemap</li>
                    <li>grievance redressal</li>
                    <li>EPR complilance</li>
                  </ul>
                </div>
                <div className='col-lg-3 d-flex flex-column align-items-center'>
                  <h2 className='fs-6 fw-light'>SOCIAL</h2>
                  <ul className='ps-0'>
                    <li>facebook</li>
                    <li>twitter</li>
                    <li>youTube</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-5'>
              <div className='row'>
                <div className='col-lg-6 d-flex flex-column align-items-center'>
                  <h2 className='fs-6 fw-light'>MAIL US: </h2>
                  <ul>
                    <li>Flipkart Internet Private Limited,</li>
                    <li>Building Alyssa,Begonia &</li>
                    <li>Clove Ring Road,Devarabeesanahalli Village,</li>
                    <li>Bengaluru,560103.</li>
                    <li>Karnataka,India</li>
                  </ul>
                </div>
                <div className='col-lg-6 d-flex flex-column align-items-center'>
                  <h2 className='fs-6 fw-light'>REGISTERED OFFICE: </h2>
                  <ul>
                    <li>Flipkart Internet Private Limited,</li>
                    <li>Building Alyssa,Begonia &</li>
                    <li>Clove Ring Road,Devarabeesanahalli Village,</li>
                    <li>Bengaluru,560103.</li>
                    <li>Karnataka,India</li>
                    <li>CIN:U51109KA2012PTC066107</li>
                    <li>
                      Telephone: <span>044-45614700</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <div className='final d-flex flex-column align-items-center'>
            <h2 className='fs-5'>All Rights Reserved</h2>
            <h3 className='fs-5'>Designed By Shalini</h3>
          </div> */}
        </div>
      </section>
    </footer>
  )
}

export default Footer
