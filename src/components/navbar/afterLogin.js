import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { changeLogin } from "../../store/slices/loginSlices";
function AfterLoginNavbar() {
  const dispatch = useDispatch();
  function Logout() {
    dispatch(changeLogin());
  }

  return (
    <div className=" w-full h-[100px] border-b-2 flex justify-between items-center ">
      <Link to="/" className=" w-[200px] ml-24 ">
        <img src={require("../images/logo2.png")} />
      </Link>
      <div className="">
        <button className="w-24 h-12  bg-[#f79b21] hover:shadow-lg rounded-full font-semibold">
          Profil
        </button>
        <Link to="/urunler">
          <button className="w-24 h-12 mx-4 bg-[#f79b21] hover:shadow-lg rounded-full font-semibold">
            Ürünler
          </button>
        </Link>
        <button
          className="w-24 h-12 mr-8 bg-[#f79b21] hover:shadow-lg rounded-full font-semibold "
          onClick={Logout}
        >
          Çıkış Yap
        </button>
      </div>
    </div>
  );
}

export default AfterLoginNavbar;
