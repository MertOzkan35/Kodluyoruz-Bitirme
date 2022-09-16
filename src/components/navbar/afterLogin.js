import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { changeLogin } from "../../store/slices/loginSlices";
function AfterLoginNavbar() {
  const adminLogin = useSelector((state) => state.admin.admin);
  useEffect(() => {
    setprodNumber(prodsData.length);
  });
  const dispatch = useDispatch();
  function Logout() {
    localStorage.removeItem("password");
    dispatch(changeLogin("x"));
    // çıkış yapınca login değerini değiştiyoruz
  }
  const prodsData = useSelector((state) => state.prods.prods);
  const [prodNumber, setprodNumber] = useState(0);
  console.log(adminLogin);
  return (
    <div className=" sticky top-0 z-50 bg-[#ffffff] w-full h-[100px] border-b-2 sm:pr-4 flex flex-col sm:flex-row sm:justify-between sm:items-center justify-center items-center">
      <Link to="/" className=" w-[200px] sm:ml-24 sm:mt-3 ml-2  mb-2 ">
        <img src={require("../images/logo2.png")} />
      </Link>
      <div className="flex justify-between sm:mr-8 gap-4 ">
        <Link to="/sepet">
          <button className="w-14 sm:w-28 h-12 text-sm sm:text-base flex justify-center items-center   bg-[#f79b21] hover:shadow-lg rounded-full font-semibold ">
            <img className="     " src={require("../images/sepet1.png")} />
            <p>{prodNumber}</p>
          </button>
        </Link>
        <Link to="/urunlerimiz">
          <button className="w-20 sm:w-28 h-12 text-sm sm:text-base bg-[#f79b21] hover:shadow-lg rounded-full font-semibold ">
            Ürünler
          </button>
        </Link>
        <Link to="/">
          <button
            className="w-20 sm:w-28 h-12 text-sm sm:text-base bg-[#f79b21] hover:shadow-lg rounded-full font-semibold "
            onClick={Logout}
          >
            Çıkış Yap
          </button>
        </Link>
        <Link to={adminLogin ? "/admin/paneli" : "/admin"}>
          <button className=" w-24 sm:w-28 h-12 text-sm sm:text-base bg-[#f79b21] hover:shadow-lg rounded-full font-semibold ">
            {adminLogin ? "Admin Paneli" : "Admin Girişi"}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AfterLoginNavbar;
