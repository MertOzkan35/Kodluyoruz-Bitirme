import React from "react";
import HomePage from "../afterLogin/homePage";
import Prod from "../afterLogin/prod";
import Cart from "../afterLogin/cart";
import Prod0 from "../prodsPages/prod0";
import LoginPage from "../beforeLogin/loginpPage";
import Body from "../beforeLogin/body";
import { useSelector } from "react-redux";

import { Routes, Route } from "react-router-dom";

function Router() {
  const login = useSelector((state) => state.mert.login);
  console.log(login.payload.length);
  return (
    <div>
      <Routes>
        {login.payload.length > 4 && (
          <Route exact path="/" element={<HomePage />} />
        )}

        {login.payload.length > 4 && <Route path="/sepet" element={<Cart />} />}
        <Route path="/" element={<Body />} />
        <Route path="/urunlerimiz" element={<Prod />} />
        <Route path="/prod/:id" element={<Prod0 />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default Router;
