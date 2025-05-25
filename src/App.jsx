// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import CoinDetail from "./pages/coinDetail";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:id" element={<CoinDetail />} />
      </Routes>
    </Layout>
  );
}

export default App;
