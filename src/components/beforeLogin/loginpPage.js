import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { changeLogin } from "../../store/slices/loginSlices";

function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  function Login() {
    if (userName.length > 0 && password.length > 4) {
      dispatch(changeLogin());
      localStorage.setItem("userName", userName);
      localStorage.setItem("password", password);
    } else {
      alert("ŞİFRENİZ EN AZ 5 HANELİ OLMALIDIR!");
    }
  }
  return (
    <div className="w-full flex justify-center items-center">
      <div className="mt-[100px] w-1/3 h-[400px] flex flex-col justify-between items-center bg-[#f79b21] bg-opacity-20 p-11 border-2 border-[#f79b21]">
        <div className="gap-4">
          <p className="text-[16px] font-bold text-center "> Kullanıcı İsmi </p>
          <input
            onChange={(e) => setUserName(e.target.value)}
            className="w-[200px] h-10 rounded-2xl border-2 border-black pl-2 font-semibold "
          ></input>
        </div>
        <div className="gap-4">
          <p className="text-[16px] font-bold text-center "> Şifre </p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="w-[200px] h-10 rounded-2xl border-2 border-black pl-2 font-semibold "
          ></input>
        </div>
        <button
          className="w-24 h-12  bg-[#f79b21] rounded-full font-semibold "
          onClick={Login}
        >
          <Link to="/">Giriş Yap</Link>
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
