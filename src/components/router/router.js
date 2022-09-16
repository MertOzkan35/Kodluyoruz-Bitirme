import React, { useEffect, useState } from "react";
import HomePage from "../afterLogin/homePage";
import Prod from "../afterLogin/prod";
import Cart from "../afterLogin/cart";
import Prod0 from "../prodsPages/prod0";
import LoginPage from "../beforeLogin/loginpPage";
import Body from "../beforeLogin/body";
import Admin from "../admin/admin";
import DataAdd from "../admin/dataAdd";
import DataDelete from "../admin/dataDelete";
import DataUpdate from "../admin/dataUpdate";
import AdminPanel from "../admin/adminPanel";
import SalesData from "../admin/salesData";
import UpdateProd from "../admin/updateProd";

import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

function Router() {
  const login = useSelector((state) => state.login.login);
  const adminLogin = useSelector((state) => state.admin.admin);

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
        <Route path="/admin" element={<Admin />} />;
        {adminLogin && <Route path="/admin/paneli" element={<AdminPanel />} />}
        {adminLogin && <Route path="/admin/add" element={<DataAdd />} />}
        {adminLogin && <Route path="/admin/delete" element={<DataDelete />} />}
        {adminLogin && <Route path="/admin/update" element={<DataUpdate />} />}
        {adminLogin && (
          <Route path="/admin/salesdata" element={<SalesData />} />
        )}
        {adminLogin && (
          <Route path="/admin/update/:id" element={<UpdateProd />} />
        )}
      </Routes>
    </div>
  );
}

export default Router;
