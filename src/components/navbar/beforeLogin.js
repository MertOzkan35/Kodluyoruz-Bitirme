import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function BeforeLoginNavbar() {
  return (
    <div className=" sticky top-0 z-50 bg-[#ffffff] w-full h-[100px] border-b-2 flex justify-between items-center ">
      <Link to="/" className="w-[200px] ml-24 ">
        <img src={require("../images/logo2.png")} />
      </Link>
      <div className="">
        <Link to="/urunler">
          <button className="w-24 h-12 mx-8 bg-[#f79b21] hover:shadow-lg rounded-full font-semibold">
            Ürünler
          </button>
        </Link>
        <Link to="/login">
          <button className=" w-24 h-12 mr-16 bg-[#f79b21] hover:shadow-lg rounded-full font-semibold ">
            Giriş Yap
          </button>
        </Link>
      </div>
    </div>
  );
}

export default BeforeLoginNavbar;
