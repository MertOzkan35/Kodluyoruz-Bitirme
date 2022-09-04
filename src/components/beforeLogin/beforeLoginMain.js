import React from "react";
import BeforeLoginNavbar from "../navbar/beforeLogin";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./loginpPage";
import Body from "./body";
import Prod from "../afterLogin/prod";
import Prod0 from "../prodsPages/prod0";
import Prod1 from "../prodsPages/prod1";
import Prod2 from "../prodsPages/prod2";
import Prod3 from "../prodsPages/prod3";
import Prod4 from "../prodsPages/prod4";
import Prod5 from "../prodsPages/prod5";
import Prod6 from "../prodsPages/prod6";
import Prod7 from "../prodsPages/prod7";
import Prod8 from "../prodsPages/prod8";
import Prod9 from "../prodsPages/prod9";
import Prod10 from "../prodsPages/prod10";
import Prod11 from "../prodsPages/prod11";

function BeforeLoginMain() {
  return (
    <div>
      <BeforeLoginNavbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Body />} />
        <Route exact path="/urunler" element={<Prod />} />
        <Route exact path="/prod0" element={<Prod0 />} />
        <Route exact path="/prod1" element={<Prod1 />} />
        <Route exact path="/prod2" element={<Prod2 />} />
        <Route exact path="/prod3" element={<Prod3 />} />
        <Route exact path="/prod4" element={<Prod4 />} />
        <Route exact path="/prod5" element={<Prod5 />} />
        <Route exact path="/prod6" element={<Prod6 />} />
        <Route exact path="/prod7" element={<Prod7 />} />
        <Route exact path="/prod8" element={<Prod8 />} />
        <Route exact path="/prod9" element={<Prod9 />} />
        <Route exact path="/prod10" element={<Prod10 />} />
        <Route exact path="/prod11" element={<Prod11 />} />
      </Routes>
    </div>
  );
}

export default BeforeLoginMain;
