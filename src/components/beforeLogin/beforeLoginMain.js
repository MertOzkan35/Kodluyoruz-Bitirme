import React from "react";
import BeforeLoginNavbar from "../navbar/beforeLogin";
import Router from "../router/router";
// import { Routes, Route } from "react-router-dom";
// import LoginPage from "./loginpPage";
// import Body from "./body";
// import Prod from "../afterLogin/prod";
// import Prod0 from "../prodsPages/prod0";

function BeforeLoginMain() {
  return (
    <div>
      <BeforeLoginNavbar />
      <Router />
      {/* <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Body />} />
        <Route path="/urunler" element={<Prod />} />
        <Route path="/prod/:id" element={<Prod0 />} />
      </Routes> */}
    </div>
  );
}

export default BeforeLoginMain;
