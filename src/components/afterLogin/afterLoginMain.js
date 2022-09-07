import React from "react";
import AfterLoginNavbar from "../navbar/afterLogin";
import Router from "../router/router";
// import HomePage from "./homePage";
// import Prod from "./prod";
// import Cart from "./cart";
// import Prod0 from "../prodsPages/prod0";

import { Routes, Route } from "react-router-dom";

function AfterLoginMain() {
  return (
    <div>
      <AfterLoginNavbar />
      <Router />
      {/* <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/urunlerimiz" element={<Prod />} />
        <Route exact path="/sepet" element={<Cart />} />
        <Route path="/prod/:id" element={<Prod0 />} />
      </Routes> */}
    </div>
  );
}

export default AfterLoginMain;
