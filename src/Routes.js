import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import AtomyIntroduction from "./pages/AtomyIntroduction/AtomyIntroduction";
import BluemiansIntroduction from "./pages/BluemiansIntroduction/BluemiansIntroduction";
import Main from "./pages/Main";
import MarketingPlan from "./pages/MarketingPlan/MarketingPlan";
import Product from "./pages/Product/Product";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/AtomyIntroduction" element={<AtomyIntroduction />} />
        <Route
          path="/BluemiansIntroduction"
          element={<BluemiansIntroduction />}
        />
        <Route path="/MarketingPlan" element={<MarketingPlan />} />
        <Route path="/Product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
