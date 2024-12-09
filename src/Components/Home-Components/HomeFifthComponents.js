import React from 'react'
import './style.css'
import firstimg from '../../Assets/finance 1.png'
import secimg from '../../Assets/team 1.png'
import thrimg from '../../Assets/verified 1.png'
import fourthimg from '../../Assets/medal 1.png'

export default function HomeFifthComponents() {
  return (
    <div>
     <div class="container mt-5">
        <div class="row text-dark">
            <div class="col-xl-3 col-lg-6 col-md-12 mb-4">
                <div class="info-box">
                    <img src={firstimg} className='logo' alt='firstlogo' />
                    <h4>2179</h4>
                    <p>Successful Loan Approval</p>
                </div>
            </div>

            <div class="col-xl-3 col-lg-6 col-md-12 mb-4">
                <div class="info-box">
                    <img src={secimg} className='logo' alt='seclogo' />
                    <h4>99%</h4>
                    <p>Customer Satisfaction</p>
                </div>
            </div>

            <div class="col-xl-3 col-lg-6 col-md-12 mb-4">
                <div class="info-box">
                    <img src={thrimg} className='logo' alt='thirdlogo'  />
                    <h4>70+</h4>
                    <p>Bank / NBFC's</p>
                </div>
            </div>

    
            <div class="col-xl-3 col-lg-6 col-md-12 mb-4">
                <div class="info-box">
                    <img src={fourthimg} className='logo' alt='forimg' />
                    <h4>5+</h4>
                    <p>Award Winner</p>
                </div>
            </div>
        </div>
    </div>

    </div>
  )
}
