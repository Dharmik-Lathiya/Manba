import React from 'react'

import aboutimgsmalllogo1 from '../../Assets/aboutimg1.png'
import aboutimgsmalllogo2 from '../../Assets/aboutimg2.png'
import aboutimgsmalllogo3 from '../../Assets/aboutimg3.png'

import aboutemp from '../../Assets/HomeAboutimg.png'
import './style.css'
export default function HomeThirdAbout() {
  return (
    <div className='-ml-4'>
       <div className="container ">
     
     <div className='row Second-img'>
     <label for="Why Choose Us" className="Third-Text-Head text-center mt-5 h1 ">Why Choose Us</label>
       <div className="col-xl-6 Homeaboutimg">
         <img  src={aboutemp}  alt="EMPPhotos" className='Homeaboutimg mt-5'/>
       </div>
       <div className="col-xl-6">
         <p className='HomeAboutSecondText mt-5'>
         At Manba finanserve, we are more than a loan services provider we are your gateway to financial confidence. When you choose us, you're choosing a dedicated team of professionals who are passionate about helping you achieve your financial goals. Your success is our success, and we're excited to embark on this journey with you. We invite you to experience the Manba finanserve difference – where your financial well-being is our top priority.
         </p>
         <div className='d-flex mt-5'>
           <div><img src={aboutimgsmalllogo1} className="HomeAboutLogoImg" alt='logo1' /></div>
           <div className='ml-3'>
             <label className='h5 about-title'>Trusted Expertise</label>
             <p className=''>With decades of experience in the financial industry, we have earned the trust of countlessindividuals and businesses.</p>
           </div>
         </div>
         <div className='d-flex mt-5'>
           <div><img src={aboutimgsmalllogo2} className="HomeAboutLogoImg mt-2" alt='logo2'/></div>
           <div className='ml-3'>
             <label className='h5 about-title'>Comprehensive Loan Options</label>
             <p className='h6'>We offer a diverse range of loan products to meet every need. Whether you're looking for a personal loan, a gold loan, home loan, or any other type of loan, we have a solution designed just for you.</p>
           </div>
         </div>
         <div className='d-flex mt-5 pb-5'>
           <div><img src={aboutimgsmalllogo3} className="HomeAboutLogoImg mt-3" alt='logo3' /></div>
           <div className='ml-3'>
             <label className='h5 about-title'>Trusted Expertise</label>
             <p className='h6'>We believe that access to funds should be affordable. That's why we offer some of the most competitive interest rates in the market. We work tirelessly to ensure that borrowing with us is cost-effective.</p>
           </div>
         </div>
       </div>
     </div>
    </div>
    </div>
  )
}
