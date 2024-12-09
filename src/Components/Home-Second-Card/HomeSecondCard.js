import './HomeSecondCard.css'
import economy from '../../Assets/economy 1.png'
import invesment from '../../Assets/invesment 1.png'
import agreement from '../../Assets/agreement 1.png'
import continuous from '../../Assets/continuous 1.png'
import React from 'react'

export default function HomeSecondCard() {
  return (
    <div>
        <div className="container" style={{'color':'black'}}>
      <div className="row">
        <div className="col-lg-6 col-12 Cards">
          <img src={economy} alt="economy" />
          <p>Embark on your loan journey, understanding the right loan type – personal for flexibility or business for expansion. Prepare with documentation and a strong application, focusing on credit score improvement</p>
        </div>
       <div className="col-lg-6 col-12 Cards">
          <img src={invesment} alt="economy" />
          <p>Unlock major investment potential with loans as a financial powerhouse, elevating your financial aspirations. Join us as we explore this gateway to seizing big opportunities and realizing your financial dreams</p>
        </div>
        <div className="col-lg-6 col-12 Cards">
          <img src={agreement} alt="economy" />
          <p>Unlock major investment potential with loans as a financial powerhouse, elevating your financial aspirations. Join us as we explore this gateway to seizing big opportunities and realizing your financial dreams</p>
        </div>
        <div className="col-lg-6 col-12 Cards">
          <img src={continuous} alt="economy" />
          <p>Unlock major investment potential with loans as a financial powerhouse, elevating your financial aspirations. Join us as we explore this gateway to seizing big opportunities and realizing your financial dreams</p>
        </div>
     </div>
     </div>
    </div>
  )
}
