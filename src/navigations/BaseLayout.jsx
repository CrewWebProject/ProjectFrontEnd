import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/main";
import Works from "../pages/works";
import Performance from "../pages/performance";
import NotFound from "../pages/notFound";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Academy from "../pages/academy";
import Admin from "../pages/admin";
import AdminLogin from "../pages/adminLogin";
import About from "../pages/about";

const BaseLayout = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/performance" element={<Performance />} />
        <Route path="/works" exact element={<Works />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="*" exact element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default BaseLayout;
