import React from 'react';
import aboutimgsmalllogo1 from '../../Assets/aboutimg1.png';
import aboutimgsmalllogo2 from '../../Assets/aboutimg2.png';
import aboutimgsmalllogo3 from '../../Assets/aboutimg3.png';
import "./style.css"
import aboutemp from '../../Assets/HomeAboutimg.png';

export default function HomeThirdAbout() {
  return (
    <div className="Second-img py-16 w-auto">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-center text-white text-5xl font-bold mb-12 pt-10">
          Why Choose Us
        </h2>

        {/* Grid Section */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
          {/* Left: Image */}
          <div className="relative">
            <img
              src={aboutemp}
              alt="Team"
              className="rounded-lg shadow-lg w-full object-cover"
            />
            {/* Decorative Corner */}
            <div className="absolute -top-4 -left-4 border-4 border-[#4FC3F7] rounded-lg h-full w-full -z-10"></div>
          </div>

          {/* Right: Text and Features */}
          <div className="text-gray-300">
            <p className="mb-8 leading-relaxed text-lg">
              At Manba Finanserve, we are more than a loan services provider; we
              are your gateway to financial confidence. When you choose us,
              you're choosing a dedicated team of professionals passionate about
              helping you achieve your financial goals. Your success is our
              success, and we're excited to embark on this journey with you.
              Experience the Manba Finanserve difference – where your financial
              well-being is our top priority.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <img src={aboutimgsmalllogo1} alt='logo1' className='w-24 h-24' />
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Trusted Expertise
                  </h3>
                  <p className="text-gray-300">
                    With decades of experience in the financial industry, we
                    have earned the trust of countless individuals and
                    businesses.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
              <img src={aboutimgsmalllogo2} alt='logo1' className='w-24 h-24 my-auto' />
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Comprehensive Loan Options
                  </h3>
                  <p className="text-gray-300">
                    We offer a diverse range of loan products to meet every
                    need. Whether you're looking for a personal loan, a gold
                    loan, home loan, or any other type of loan, we have a
                    solution designed just for you.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
              <img src={aboutimgsmalllogo3} alt='logo1' className='w-24 h-24 my-auto' />
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Competitive Rates
                  </h3>
                  <p className="text-gray-300">
                    We believe that access to funds should be affordable. That's
                    why we offer some of the most competitive interest rates in
                    the market.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
