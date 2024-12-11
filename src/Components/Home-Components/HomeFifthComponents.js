import React from 'react'
import './style.css'
import firstimg from '../../Assets/finance 1.png'
import secimg from '../../Assets/team 1.png'
import thrimg from '../../Assets/verified 1.png'
import fourthimg from '../../Assets/medal 1.png'

export default function HomeFifthComponents() {
  return (
    <div>
     <div class="container -mt-8 -pb-10">
        <div class="row text-dark">
            <div class="col-xl-3 col-lg-6 col-md-12 mb-4">
                <div class="info-box">
                    <img src={firstimg} className='logo' alt='firstlogo' />
                    <h1 className='text-4xl text-slate-400 mb-2'>2179</h1>
                    <p className='w-32 text-center font-semibold'>Successful Loan Approval</p>
                </div>
            </div>

            <div class="col-xl-3 col-lg-6 col-md-12 mb-4">
                <div class="info-box">
                    <img src={secimg} className='logo' alt='seclogo' />
                    <h4 className='text-4xl text-slate-400 mb-2'>99%</h4>
                    <p className='w-32 text-center font-semibold'>Customer Satisfaction</p>
                </div>
            </div>

            <div class="col-xl-3 col-lg-6 col-md-12 mb-4">
                <div class="info-box">
                    <img src={thrimg} className='logo' alt='thirdlogo'  />
                    <h4 className='text-4xl text-slate-400 mb-2'>70+</h4>
                    <p className='w-32 text-center font-semibold'>Bank / NBFC's</p>
                </div>
            </div>

    
            <div class="col-xl-3 col-lg-6 col-md-12 mb-4">
                <div class="info-box">
                    <img src={fourthimg} className='logo' alt='forimg' />
                    <h4 className='text-4xl text-slate-400 mb-2'>5+</h4>
                    <p className='w-32 text-center font-semibold'>Award Winner</p>
                </div>
            </div>
        </div>
    </div>

    </div>
  )
}
