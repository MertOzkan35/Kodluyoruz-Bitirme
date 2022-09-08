import "./App.css";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AfterLoginMain from "./components/afterLogin/afterLoginMain";
import BeforeLoginMain from "./components/beforeLogin/beforeLoginMain";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/footer";
import { changeLogin } from "./store/slices/loginSlices";

function App() {
  const newPassword = localStorage.getItem("password");
  const dispatch = useDispatch();
  const login = useSelector((state) => state.mert.login);
  useEffect(() => {
    if (newPassword) {
      dispatch(changeLogin(newPassword));
    }
  }, [newPassword]);

  return (
    <div>
      {login.payload.length > 4 ? <AfterLoginMain /> : <BeforeLoginMain />}

      <Footer />
    </div>
  );
}

export default App;
