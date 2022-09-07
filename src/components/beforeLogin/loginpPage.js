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
      localStorage.setItem("userName", userName);
      localStorage.setItem("password", password);
      dispatch(changeLogin(password));
    } else {
      alert("ŞİFRENİZ EN AZ 5 HANELİ OLMALIDIR!");
    }
  }
  return (
    <div className="w-full flex justify-center  items-center">
      <div className="mt-[100px] w-1/3 h-[450px] mb-12 rounded-2xl flex flex-col justify-between items-center bg-[#f79b21] bg-opacity-40 p-11 border-2 border-[#f79b21]">
        <div className="  gap-4">
          <p className="text-[16px] w-54   flex justify-center items-center  font-semibold text-center gap-2 pb-4 ">
            {" "}
            Kullanıcı İsmi <img src={require("../images/user.png")} />
          </p>
          <input
            onChange={(e) => setUserName(e.target.value)}
            className="w-[200px] h-10 rounded-2xl border-2 border-white pl-2 font-semibold "
          ></input>
        </div>
        <div className="gap-4">
          <p className="text-[16px] w-54  gap-2  flex justify-center items-center font-semibold pb-4 text-center ">
            {" "}
            Şifre <img src={require("../images/key.png")} />{" "}
          </p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="w-[200px] h-10 rounded-2xl border-2 border-white pl-2 font-semibold "
          ></input>
        </div>
        <Link to="/">
          <button
            className="w-24 h-12 hover:border-0 border-2  bg-[#f79b21] rounded-full font-semibold "
            onClick={Login}
          >
            Giriş Yap
          </button>
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
