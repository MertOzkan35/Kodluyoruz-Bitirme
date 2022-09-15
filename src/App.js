import "./App.css";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AfterLoginMain from "./components/afterLogin/afterLoginMain";
import BeforeLoginMain from "./components/beforeLogin/beforeLoginMain";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/footer";
import { changeLogin } from "./store/slices/loginSlices";
import { addbulk } from "./store/slices/dataSlices";
import { mockdata } from "./store/slices/mock";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const products = localStorage.getItem("products");
    const parsedproducts = JSON.parse(products);

    if (parsedproducts) {
      dispatch(addbulk(parsedproducts));
    } else {
      dispatch(addbulk(mockdata));
      localStorage.setItem("products", JSON.stringify(mockdata));
    }
  }, []);

  const newPassword = localStorage.getItem("password");

  const login = useSelector((state) => state.MainData.login);
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
