import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function BeforeLoginNavbar() {
  return (
    <div className=" sticky top-0 z-50 bg-[#ffffff] w-full h-[100px] border-b-2 sm:pr-4 flex flex-col sm:flex-row sm:justify-between sm:items-center justify-center items-center ">
      <Link to="/" className="w-[200px] sm:ml-24 sm:mt-3 ml-2  mb-2 ">
        <img src={require("../images/logo2.png")} />
      </Link>
      <div className="flex justify-between   gap-4 sm:mr-8">
        <Link to="/urunlerimiz">
          <button className="sm:w-28 w-24 text-sm sm:text-base h-12  bg-[#f79b21] hover:shadow-lg rounded-full font-semibold">
            Ürünler
          </button>
        </Link>
        <Link to="/login">
          <button className=" sm:w-28 w-24 text-sm sm:text-base  h-12  bg-[#f79b21] hover:shadow-lg rounded-full font-semibold ">
            Giriş Yap
          </button>
        </Link>
        <Link to="/admin">
          <button className=" sm:w-28 w-24  h-12 text-sm sm:text-base  bg-[#f79b21] hover:shadow-lg rounded-full font-semibold ">
            Admin Giriş
          </button>
        </Link>
      </div>
    </div>
  );
}

export default BeforeLoginNavbar;
