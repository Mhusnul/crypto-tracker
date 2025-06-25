import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import CoinDetail from "./pages/CoinDetail";
import Navbar from "./components/Navbar";
import { div } from "framer-motion/client";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:id" element={<CoinDetail />} />
      </Routes>
    </div>
  );
}

export default App;
