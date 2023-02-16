import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeAdmin from "./components/admin/HomeAdmin";
import HomeCus from "./components/customer/HomeCus";
import LoginCus from "./components/customer/LoginCus";
import Payments from "./components/customer/Payments";
import Purchases from "./components/customer/Purchases";
import RegisterCus from "./components/customer/RegisterCus";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" exact element={<HomeCus />}></Route>
          <Route path="/admin" element={<HomeAdmin />}></Route>
          <Route path="/RegisterCustomer" element={<RegisterCus />}></Route>
          <Route path="/LoginCustomer" element={<LoginCus />}></Route>
          <Route path="/Purchases" element={<Purchases />}></Route>
          <Route path="/Payments" element={<Payments />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
