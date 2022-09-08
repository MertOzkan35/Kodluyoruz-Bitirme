import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { changeLogin } from "../../store/slices/loginSlices";
function AfterLoginNavbar() {
  useEffect(() => {
    setprodNumber(prodsData.length);
  });
  const dispatch = useDispatch();
  function Logout() {
    dispatch(changeLogin("x"));
  }
  const prodsData = useSelector((state) => state.prods.prods);
  const [prodNumber, setprodNumber] = useState(0);

  return (
    <div className=" sticky top-0 z-50 bg-[#ffffff] w-full h-[100px] border-b-2 flex justify-between items-center ">
      <Link to="/" className=" w-[200px] ml-24 ">
        <img src={require("../images/logo2.png")} />
      </Link>
      <div className="flex ">
        <Link to="/sepet">
          <button className="w-24 h-12 flex justify-center items-center gap-2  bg-[#f79b21] hover:shadow-lg rounded-full font-semibold">
            <img className="     " src={require("../images/sepet1.png")} />
            <p>{prodNumber}</p>
          </button>
        </Link>
        <Link to="/urunlerimiz">
          <button className="w-24 h-12 mx-8 bg-[#f79b21] hover:shadow-lg rounded-full font-semibold">
            Ürünler
          </button>
        </Link>
        <Link to="/">
          <button
            className="w-24 h-12 mr-16 bg-[#f79b21] hover:shadow-lg rounded-full font-semibold "
            onClick={Logout}
          >
            Çıkış Yap
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AfterLoginNavbar;
