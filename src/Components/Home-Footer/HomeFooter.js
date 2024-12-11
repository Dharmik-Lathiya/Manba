import React from "react";
import logo from "../../Assets/logo.png";
export default function HomeFooter() {
  return (
    <>
      <div className="bg-[#212121] grid">
        <div className=" h-24 place-items-center my-5 ">
          <img src={logo} alt="logo" className="h-16 w-16 " />
          <p className="text-2xl">Manba Finaserve</p>
        </div>
        <div className="w-11/12 mx-auto">
          <hr className="h-0.5 bg-slate-700" />
          <div className="container -my-8 -mb-24">
            <div className="row text-dark">
              <div className="col-xl-6 col-lg-6 col-md-12 mb-4">
                <div className="info-box text-gray-50">
                  <p>
                    With thousands of people starting up new businesses every
                    day, thousands of families looking for a new mortgage, and
                    so on, the loan companies play a vital role in today's
                    society...
                  </p>
                  <div className="flex mt-10">
                    <div className="flex items-start space-x-2">
                      <i className="fas fa-map-marker-alt"></i>
                      <p>312, superdiamond market</p>
                    </div>
                    <div className="flex items-start space-x-2 ml-24">
                      <i className="fas fa-phone-alt"></i>
                      <p>+91 22 6212 5000</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-2 col-lg-6 col-md-12 mb-4">
                <div className="info-box text-gray-50 text-lg">
                  <p className="text-xl -ml-16 -mt-14 text-slate-300">Pages</p>
                  <ul>
                    <li className="flex items-center">
                      <span className="font-bold mr-2">></span>
                      <a href="/">Home</a>
                    </li>
                    <li className="flex items-center mt-3">
                      <span className="font-bold mr-2">></span>
                      <a href="/">About Us</a>
                    </li>
                    <li className="flex items-center mt-3">
                      <span className="font-bold mr-2">></span>
                      <a href="/">Contect Us</a>
                    </li>
                    <li className="flex items-center mt-3">
                      <span className="font-bold mr-2">></span>
                      <a href="/">Services</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-2 col-lg-6 col-md-12 mb-4">
                <div className="info-box text-gray-50 text-lg">
                  <p className="text-xl -ml-24 -mt-14 text-slate-300">Loan</p>
                  <ul>
                    <li className="flex items-center">
                      <span className="font-bold mr-2">></span>
                      <a href="/">Home Loan</a>
                    </li>
                    <li className="flex items-center mt-3">
                      <span className="font-bold mr-2">></span>
                      <a href="/">Personal Loan</a>
                    </li>
                    <li className="flex items-center mt-3">
                      <span className="font-bold mr-2">></span>
                      <a href="/">Gold Loan</a>
                    </li>
                    <li className="flex items-center mt-3">
                      <span className="font-bold mr-2">></span>
                      <a href="/">Home</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-2 col-lg-6 col-md-12 mb-4">
                <div className="info-box text-gray-50 text-lg">
                  <p className="text-xl -ml-3 -mt-14 text-slate-300">
                    Social Media
                  </p>
                  <ul>
                    <li className="flex items-center">
                      <i className="fab fa-facebook-f w-6"></i>
                      <a href="/">Facebook</a>
                    </li>
                    <li className="flex items-center mt-3">
                      <i className="fab fa-instagram w-6"></i>
                      <a href="/">Instagram</a>
                    </li>
                    <li className="flex items-center mt-3">
                      <i className="fab fa-twitter w-6"></i>
                      <a href="/">Twitter</a>
                    </li>
                    <li className="flex items-center mt-3">
                      <i className="fab fa-linkedin w-6"></i>
                      <a href="/">LinkedIn</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-slate-50 text-slate-950 grid grid-cols-2 gap-8">
          <div className="mx-auto flex my-10">
          <i class="far fa-copyright mt-1 mr-2"></i>
            <p>Manba Finanserve Holdings Limited</p>
          </div>
          <div className="mx-auto flex my-10">
          <i class="fas fa-envelope mt-1 mr-2"></i>
            <p>manbafinaserve@gmil.com</p>
          </div>
        </div>
      </div>
    </>
  );
}
