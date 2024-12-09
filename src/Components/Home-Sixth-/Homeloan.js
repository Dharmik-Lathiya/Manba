import React from 'react'
import './style.css'
import first from '../../Assets/cashloanleftimg.png'
export default function Homeloan() {
  return (
    <div className='Mainback'>
      <div className='container '>
        <div className='row text-dark'>
            <div className='col-xl'>
              <img src={first} alt='first img' className='firstImg'/>
            </div>
            <div className='col-xl text-light'>
              <p>Do you need a small cash loan?</p>
            </div>
        </div>
      </div>
    </div>
  )
}
