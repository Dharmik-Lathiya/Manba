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
        <div>

        </div>
      </div>
    </>
  );
}
