import React from 'react'
import './style.css'
import first from '../../Assets/cashloanleftimg.png'
export default function Homeloan() {
  return (
    <div className='Mainback'>
      <div className='container '>
        <div className='row text-dark pb-20'>
            <div className='col-xl'>
              <img src={first} alt='first img' className='firstImg mx-16'/>
            </div>
            <div className='col-xl text-light grid'>
              <p className='my-24 text-5xl'>Do you need a small cash loan?</p>
              <p className='text-2xl w-4/5 -mt-24 text-blue-400'>We’ll provide you with anythig between ₹1,00,000 and ₹50L !</p>
              <p className='text-lg -mt-10'>If you're facing an unexpected financial expense, such as a medical emergency, car repair, or home repair, you may be considering taking out a small cash loan. Small cash loans are typically unsecured loans, which means you don't need to put up any collateral to get them. They can be a good option for people with less-than-perfect credit or who need money quickly.</p>
              <button className='bg-slate-50 text-blue-400 px-8 h-14 mx-auto rounded-lg text-2xl border-sky-500 border-2 hover:bg-blue-400 hover:text-white'>APPLY NOW</button>
            </div>
        </div>
      </div>
    </div>
  )
}
